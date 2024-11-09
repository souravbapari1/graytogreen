export interface JobsData {
  jobs: Job[];
}

export interface Job {
  documentId: string;
  jon_position: string;
  location: string;
  image: Image;
  slug: string;
}

export interface Image {
  url: string;
}
