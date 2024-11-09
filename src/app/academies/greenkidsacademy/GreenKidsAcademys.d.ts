export interface GreenKidsAcademyData {
  greenKidsAcademies: GreenKidsAcademy[];
  upcomingAcademies: UpcomingAcademy[];
}

export interface GreenKidsAcademy {
  documentId: string;
  banner: Banner;
  Academies: Academies;
  cards: Card[];
  language: Language;
  createdAt: string;
  flowChatImage: FlowChatImage;
  flowChatMobileImage: FlowChatMobileImage;
  flowChatTitle: string;
}

export interface Banner {
  id: string;
  title: string;
  description: string;
  bannerImage: BannerImage;
}

export interface BannerImage {
  url: string;
}

export interface Academies {
  id: string;
  title: string;
  description: string;
  image: Image;
  links: Link[];
}

export interface Image {
  url: string;
}

export interface Link {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface Card {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl?: string;
  align: string;
  image: Image2;
}

export interface Image2 {
  url: string;
}

export interface Language {
  id: string;
  name: string;
}

export interface FlowChatImage {
  url: string;
}

export interface FlowChatMobileImage {
  url: string;
}

export interface UpcomingAcademy {
  documentId: string;
  title: string;
  date: string;
  time: string;
  languge: string;
  location: string;
  name: string;
  slug: string;
}
