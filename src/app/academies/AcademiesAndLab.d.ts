export interface AcademiesAndLabs {
  academiesAndLabs: AcademiesAndLab[];
}

export interface AcademiesAndLab {
  __typename: string;
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
}

export interface BannerImage {
  __typename: string;
  url: string;
}

export interface Infocard {
  __typename: string;
  id: string;
  link: string;
  title: string;
  image: Image;
}

export interface Image {
  __typename: string;
  url: string;
  name: string;
}

export interface Language {
  __typename: string;
  id: string;
  name: string;
}
