export interface JobData {
  jobs: Job[];
}

export interface Job {
  documentId: string;
  jon_position: string;
  location: string;
  slug: string;
  content: string;
  applyLink: string;
  image: Image;
}

export interface Image {
  url: string;
}