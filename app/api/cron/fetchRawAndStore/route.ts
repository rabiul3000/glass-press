import { fetchAllNews } from "@/lib/news/fetchNews";
import normalizeArticles from "@/lib/news/normalize";
import { createClient } from "@/lib/supabase/client";

export async function GET() {
    const supabase = createClient();
    const raw = await fetchAllNews();
    const articles = normalizeArticles(raw);

    await supabase.from("raw_articles").upsert(articles, { onConflict: "link" });

    return Response.json({ inserted: articles.length });
}
