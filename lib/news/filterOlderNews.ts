export async function filterOlderNews(raw: any[]) {
    const HOURS_LIMIT = 24;
    const ONE_DAY_MS = HOURS_LIMIT * 60 * 60 * 1000;

    const now = Date.now();

    const articles = raw.filter((item) => {
        if (!item.publishedAt) return false;

        const publishedTime = new Date(item.publishedAt).getTime();

        // skip invalid dates
        if (isNaN(publishedTime)) return false;

        // ✅ keep only articles within last 24 hours
        return (now - publishedTime) <= ONE_DAY_MS;
    });

    return articles;
}
