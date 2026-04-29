import { createPreviewImage } from "@/lib/news/createPreviewImage";
import { generatePost } from "@/lib/news/generatePost";
import selectAgent from "@/lib/news/selectAgent";
import supabaseAdmin from "@/lib/supabase/supabaseAdmin";

export async function GET() {
  const supabase = supabaseAdmin;






  console.log("Fetching raw news data...");

  const { data: articles, error } = await supabase
    .from("raw_news")
    .select("*")
    .eq("processed", false)
    .limit(10);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  if (!articles || articles.length === 0) {
    return Response.json({
      created: 0,
      processed: 0,
      message: "No new articles",
    });
  }

  const articleIds = articles.map((a) => a.id);

  // 🔒 STEP 1: LOCK ARTICLES IMMEDIATELY (prevents race condition)
  await supabase
    .from("raw_news")
    .update({ processed: true })
    .in("id", articleIds);

  console.log(`📰 Processing ${articles.length} articles...`);

  function cleanText(text: string) {
    return text
      .replace(/•/g, "-")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  // 🚀 PARALLEL PROCESSING
  const results = await Promise.all(
    articles.map(async (article) => {
      console.log("➡️ Processing:", article.title);

      try {
        // 🛑 STEP 2: SKIP if already exists (saves AI calls)
        const { data: existing } = await supabase
          .from("posts")
          .select("id")
          .eq("source_url", article.source_url)
          .maybeSingle();

        if (existing) {
          console.log("⏭️ Skipping (already exists):", article.source_url);
          return null;
        }

        const agent = await selectAgent(article)
        const result = await generatePost(article, agent);
        const image_url = await createPreviewImage(article.source_url);

        return {
          post: {
            title: article.title,
            content: cleanText(result.content),
            summary: cleanText(result.summary),
            agent_id: agent.id,
            source_url: article.source_url,
            source_domain: article.source_domain,
            confidence_score: Number(result.confidence_score),
            published_at: article.published_at || new Date().toISOString(),
            image_url,
            likes: 0,
            comments: 0,
          },
          id: article.id,
        };
      } catch (err) {
        console.log("❌ Processing error:", err);
        return null;
      }
    })
  );

  // ✅ Filter successful results
  const validResults = results.filter(Boolean) as {
    post: any;
    id: string;
  }[];

  const posts = validResults.map((r) => r.post);
  const processedIds = validResults.map((r) => r.id);

  // 🧠 STEP 3: DEDUPE (extra safety)
  const uniquePosts = Array.from(
    new Map(posts.map((p) => [p.source_url, p])).values()
  );

  // 💾 STEP 4: UPSERT POSTS
  if (uniquePosts.length > 0) {
    console.log(`💾 Upserting ${uniquePosts.length} posts...`);

    const { error: upsertError } = await supabase
      .from("posts")
      .upsert(uniquePosts, { onConflict: "source_url" });

    if (upsertError) {
      console.error("❌ Supabase Upsert Error:", upsertError);
      return Response.json(
        { error: upsertError.message, details: upsertError },
        { status: 500 }
      );
    }
  }

  // ✅ STEP 5: (OPTIONAL SAFETY)
  // If you want stricter logic, you could revert failed ones back to processed = false
  // but usually not needed unless you want retry system

  return Response.json({
    created: uniquePosts.length,
    processed: processedIds.length,
  });

}
