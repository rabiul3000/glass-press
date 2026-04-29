import { dedupeArticles } from "@/lib/news/dedupeArticles";
import { fetchAllNews } from "@/lib/news/fetchNews";
import normalizeArticles from "@/lib/news/normalize";
import supabaseAdmin from "@/lib/supabase/supabaseAdmin";

export async function GET() {
    const supabase = supabaseAdmin;
    const raw = await fetchAllNews();
    const normalized = normalizeArticles(raw);
    const articles = dedupeArticles(normalized);

    const { data, error } = await supabase
        .from("raw_news")
        .upsert(articles, { onConflict: "source_url" });

    if (error) {
        console.error("SUPABASE INSERT ERROR:", error);
    }


    return Response.json({ inserted: articles.length });
}
