export interface PagesData {
  pages: Page[];
}

export interface Page {
  __typename: string;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
