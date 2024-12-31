export interface HomePages {
  homePages: HomePage[];
}

export interface HomePage {
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
  image: Image;
  title: string;
  id: string;
}

export interface Image {
  url: string;
  alternativeText: any;
}

export interface Sponsor {
  brandImage: BrandImage;
  id: string;
  url: string;
}

export interface BrandImage {
  url: string;
}

export interface Academies {
  description: string;
  id: string;
  title: string;
  Academies: Academy[];
  images: Images;
  links: Link[];
}

export interface Academy {
  title: string;
  time: string;
  startDate: string;
  slug: string;
  registerationEndDate: string;
  pricing: string;
  name: string;
  locationType: string;
  location: string;
  languge: string;
  endDate: string;
  applications?: number;
  amount: number;
  maxParticipents: number;
}

export interface Images {
  center: Center;
  left: Left;
  right: Right;
}

export interface Center {
  url: string;
}

export interface Left {
  url: string;
}

export interface Right {
  url: string;
}

export interface Link {
  linkText: string;
  id: string;
  linkUrl: string;
}

export interface ActionSpeaks {
  description: string;
  id: string;
  title: string;
  videoId: string;
  Links: Link2[];
}

export interface Link2 {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface ListCardView {
  align: string;
  description: string;
  id: string;
  title: string;
  linkUrl: string;
  linkText: string;
  image: Image2;
}

export interface Image2 {
  url: string;
  name: string;
}

export interface HowItWorks {
  description: string;
  id: string;
  title: string;
  videoId: string;
  Links: Link3[];
}

export interface Link3 {
  linkUrl: string;
  linkText: string;
  id: string;
}

export interface Faq {
  answer: string;
  id: string;
  question: string;
}

export interface Language {
  name: string;
  id: string;
}
