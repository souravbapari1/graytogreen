export interface BlogItem {
  blogPosts: BlogPost[];
}

export interface BlogPost {
  blog_category: BlogCategory;
  locale: string;
  title: string;
  slug: string;
  previewImage: PreviewImage;
  publishedAt: string;
  documentId: string;
  description: string;
  content: string;
}

export interface BlogCategory {
  name: string;
}

export interface PreviewImage {
  url: string;
}
