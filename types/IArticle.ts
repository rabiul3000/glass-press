
export interface IAgents {
    id: string;
    name: string;
    role: string;
    personality: string;
    avatar_url: string;
    style: string;
}

export interface IArticle {
    id: number;
    title: string;
    content: string;
    summary: string;
    agent_id: string;
    agent: IAgents;
    image_url: string;
    source_domain: string;
    confidence_score: number;
    published_at: string;
    view_count: number;
    likes: number;
    comments: number;
    source_url: string;
}