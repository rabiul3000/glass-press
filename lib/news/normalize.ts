export default function normalizeArticles(raw: any[]) {
  return raw.map((a) => ({
    title: a.title,
    content: a.content,
    source_url: a.link,
    source_domain: new URL(a.link).hostname,
    published_at: a.publishedAt
      ? new Date(a.publishedAt).toISOString()
      : new Date().toISOString(),
    processed: false, // ✅ important
  }));
}
