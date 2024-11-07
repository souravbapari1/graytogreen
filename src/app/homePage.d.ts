export interface HomePages {
  homePages: HomePage[];
}

export interface HomePage {
  __typename: string;
  documentId: string;
  banner: Banner[];
  sponsors: Sponsor[];
  Academies: Academies;
  actionSpeaks: ActionSpeaks;
  listCardView: ListCardView[];
  howItWorks: HowItWorks;
  faqs: Faq[];
  createdAt: string;
  language: Language;
}

export interface Banner {
  __typename: string;
  image: Image;
  title: string;
  id: string;
}

export interface Image {
  __typename: string;
  url: string;
  alternativeText: any;
}

export interface Sponsor {
  __typename: string;
  brandImage: BrandImage;
  id: string;
}

export interface BrandImage {
  __typename: string;
  url: string;
}

export interface Academies {
  __typename: string;
  description: string;
  id: string;
  title: string;
  image: Image2;
}

export interface Image2 {
  __typename: string;
  url: string;
  name: string;
}

export interface ActionSpeaks {
  __typename: string;
  description: string;
  id: string;
  title: string;
  videoId: string;
}

export interface ListCardView {
  __typename: string;
  align: string;
  description: string;
  id: string;
  title: string;
  linkUrl: string;
  linkText: string;
  image: Image3;
}

export interface Image3 {
  __typename: string;
  url: string;
  name: string;
}

export interface HowItWorks {
  __typename: string;
  description: string;
  id: string;
  title: string;
  videoId: string;
}

export interface Faq {
  __typename: string;
  answer: string;
  id: string;
  question: string;
}

export interface Language {
  __typename: string;
  name: string;
  id: string;
}
