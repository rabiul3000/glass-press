const normalizeArticles = (raw: any[]) => {
    return raw.map(({ title, content, link, source, country, publishedAt }) => ({
        title: title.trim(),
        content: content.trim(),
        link,
        source,
        country,
        publishedAt: new Date(publishedAt).toISOString(),
    }));
};

export default normalizeArticles;
