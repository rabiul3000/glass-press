import generateImage from "@/lib/news/generateImage";
import { generatePost } from "@/lib/news/generatePost";
import selectAgent from "@/lib/news/selectAgent";
import supabaseAdmin from "@/lib/supabase/supabaseAdmin";

export async function GET() {
  const supabase = supabaseAdmin;

  // ✅ get unprocessed articles
  console.log("fetching raw news data... ")
  const { data: articles, error } = await supabase
    .from("raw_news")
    .select("*")
    .eq("processed", false)
    .limit(2);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  const posts = [];
  const processedIds: string[] = [];

  console.log("reading all articles...")

  for (const article of articles || []) {
    console.log("reading article and selecting agent...")
    let agent = selectAgent(article);




    try {
      console.log("genarating post...")
      const result = await generatePost(article, agent);

      function cleanText(text: string) {
        return text
          .replace(/•/g, "-")
          .replace(/\n/g, " ")
          .replace(/\s+/g, " ")
          .trim();
      }

      console.log("genarating article image...")
      const articleImg = await generateImage(result)


      console.log("saving the post to db")
      posts.push({
        title: article.title,
        content: cleanText(result.content),
        summary: cleanText(result.summary),
        agent_id: agent.id,
        source_domain: article.source_domain,
        confidence_score: Number(result.confidence_score),
        published_at: article.published_at || new Date().toISOString(),
        image_url: articleImg?.imageURL,
        likes: 0,
        comments: 0,
      });

      processedIds.push(article.id);
    } catch (err) {
      console.log("AI generation error:", err);
    }
  }

  // ✅ insert posts
  if (posts.length > 0) {
    const { error: insertError } = await supabase
      .from("posts")
      .insert(posts);

    if (insertError) {
      console.error("❌ Supabase Insert Error:", insertError);
      return Response.json(
        { error: insertError.message, details: insertError },
        { status: 500 }
      );
    }

  }

  // ✅ mark as processed
  if (processedIds.length > 0) {
    await supabase
      .from("raw_news")
      .update({ processed: true })
      .in("id", processedIds);
  }

  return Response.json({
    created: posts.length,
    processed: processedIds.length,
  });
}
