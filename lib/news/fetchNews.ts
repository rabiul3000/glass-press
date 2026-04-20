import Parser from "rss-parser";
import newsSources from "./newsSources";


const parser = new Parser();

export async function fetchAllNews() {
    let articles: any[] = [];

    for (const { country, name, type, url } of newsSources) {
        try {
            if (type === "rss") {
                const feed = await parser.parseURL(url);

                const items = feed.items
                    .slice(0, 10)
                    .map(({ title, contentSnippet, link, pubDate }) => ({
                        title,
                        content: contentSnippet,
                        link,
                        publishedAt: pubDate,
                        source: name,
                        country,
                    }));

                articles.push(...items);
            }
        } catch (error) {
            console.log("error fetching from lib/ai/fetchNews:16 =>", name);
        }
    }
    return articles;
}
