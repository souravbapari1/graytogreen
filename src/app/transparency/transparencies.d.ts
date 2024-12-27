export interface TransparencyData {
  transparencies: Transparency[];
}

export interface Transparency {
  documentId: string;
  language: Language;
  reports: Report[];
  banner: Banner;
}

export interface Language {
  name: string;
  id: string;
}

export interface Report {
  description: string;
  file: File;
  title: string;
  id: string;
}

export interface File {
  url: string;
}

export interface Banner {
  description: string;
  id: string;
  title: string;
  leftImage: LeftImage;
  rightImage: RightImage;
  centerImage: CenterImage;
}

export interface LeftImage {
  url: string;
}

export interface RightImage {
  url: string;
}

export interface CenterImage {
  url: string;
}
