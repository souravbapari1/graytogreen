export interface PartenerWithUses {
  partenerWithUses: PartenerWithUse[];
}

export interface PartenerWithUse {
  __typename: string;
  OurTeamTitle: string;
  advantages: Advantage[];
  advantagesTitle: string;
  banner: Banner;
  documentId: string;
  language: Language;
  ourSolution: OurSolution[];
  ourTeam: OurTeam[];
  requestFormLink: string | nul;
  OurTeamDesc: string | null;
}

export interface Advantage {
  __typename: string;
  description: string;
  id: string;
  image: Image;
  title: string;
}

export interface Image {
  __typename: string;
  url: string;
}

export interface Banner {
  __typename: string;
  bannerImage: BannerImage;
  id: string;
  title: string;
  description: string;
}

export interface BannerImage {
  __typename: string;
  url: string;
}

export interface Language {
  __typename: string;
  name: string;
  id: string;
}

export interface OurSolution {
  __typename: string;
  align: string;
  description: string;
  id: string;
  image: Image2;
  linkText: any;
  linkUrl: any;
  title: string;
}

export interface Image2 {
  __typename: string;
  url: string;
  name: string;
}

export interface OurTeam {
  __typename: string;
  about: string;
  id: string;
  linkdinProfile: string;
  name: string;
  image: Image3;
}

export interface Image3 {
  __typename: string;
  url: string;
}
