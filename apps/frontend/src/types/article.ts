export interface ArticleInput {
  title: string;
  content: string;
  category?: string;
  author?: string;
  tags: string[];
}

export interface ArticlePayload extends ArticleInput {
  idempotency_key: string;
  created_at: string;
}