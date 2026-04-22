import { fetchAllNews } from "@/lib/news/fetchNews";
import normalizeArticles from "@/lib/news/normalize";
import { createClient } from "@/lib/supabase/client";

export async function GET() {
    const supabase = createClient();
    const raw = await fetchAllNews();
    const articles = normalizeArticles(raw);

    const { data, error } = await supabase
        .from("raw_news")
        .upsert(articles, { onConflict: "source_url" });

    if (error) {
        console.error("SUPABASE INSERT ERROR:", error);
    }


    return Response.json({ inserted: articles.length });
}
