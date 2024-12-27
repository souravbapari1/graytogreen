export interface AcademiesAndLabs {
  academiesAndLabs: AcademiesAndLab[];
}

export interface AcademiesAndLab {
  BootCamps: number;
  bannerImage: BannerImage;
  climateChangeExperts: number;
  documentId: string;
  graduatedAmbassadors: number;
  headerDescription: string;
  headerTitle: string;
  releasedResearches: number;
  workspace: number;
  publishedAt: string;
  infocard: Infocard[];
  language: Language;
  Slogons: Slogon[];
}

export interface BannerImage {
  url: string;
}

export interface Infocard {
  id: string;
  link: string;
  title: string;
  image: Image;
}

export interface Image {
  url: string;
  name: string;
}

export interface Language {
  id: string;
  name: string;
}

export interface Slogon {
  title?: string;
  id: string;
  description: string;
  bannerImage: BannerImage2;
}

export interface BannerImage2 {
  url: string;
}
