export interface StandardData {
  standards: Standard[];
}

export interface Standard {
  __typename: string;
  banner: Banner;
  boardMembers: BoardMember[];
  documentId: string;
  language: Language;
  membersDescription: string;
  membersTitle: string;
  plantingReports: PlantingReport[];
  plantingReportsDesc: string;
  plantingReportsTitle: string;
  plasticReports: PlasticReport[];
  plasticReportsDesc: string;
  plasticReportsTitle: string;
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

export interface BoardMember {
  __typename: string;
  about: string;
  id: string;
  linkdinProfile: any;
  name: string;
  position: string;
  image: Image;
}

export interface Image {
  __typename: string;
  url: string;
}

export interface Language {
  __typename: string;
  name: string;
  id: string;
}

export interface PlantingReport {
  __typename: string;
  description: string;
  id: string;
  title: string;
  file: File;
}

export interface File {
  __typename: string;
  url: string;
}

export interface PlasticReport {
  __typename: string;
  description: string;
  file: File2;
  id: string;
  title: string;
}

export interface File2 {
  __typename: string;
  url: string;
}
