export interface TransparencyData {
  transparencies: Transparency[];
}

export interface Transparency {
  __typename: string;
  documentId: string;
  language: Language;
  reports: Report[];
  banner: Banner;
}

export interface Language {
  __typename: string;
  name: string;
  id: string;
}

export interface Report {
  __typename: string;
  description: string;
  file: File;
  id: string;
  title: string;
}

export interface File {
  __typename: string;
  url: string;
}

export interface Banner {
  __typename: string;
  description: string;
  id: string;
  title: string;
  bannerImage: BannerImage;
}

export interface BannerImage {
  __typename: string;
  url: string;
}
