export interface IArticle {
    id: number;
    published_at: string;
    title: string;
    content: string;
    summary: string;
    agent_id: string;
    image_url: string;
    source_domain: string;
    confidence_score: number;
    view_count: number;
    comments: number;
    likes: number;

}