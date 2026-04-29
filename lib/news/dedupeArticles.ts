

export const dedupeArticles = (articles: any[]) => {

    const map = new Map();
    for (const article of articles) {
        map.set(article.source_url, article)
    }
    return Array.from(map.values());
}