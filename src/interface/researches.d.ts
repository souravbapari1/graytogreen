export interface ResearchItem {
  researchPosts: ResearchPost[];
}

export interface ResearchPost {
  documentId: string;
  description: string;
  locale: string;
  previewImage: PreviewImage;
  slug: string;
  state: string;
  title: string;
  research_category: ResearchCategory;
  content: string;
  publishedAt: string;
}

export interface PreviewImage {
  url: string;
}

export interface ResearchCategory {
  name: string;
}
