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
  description: string;
  Title: string;
  Links: Link[];
  SideImages: SideImages;
}

export interface Link {
  linkText: string;
  linkUrl: string;
  id: string;
}

export interface SideImages {
  right: Right;
  left: Left;
  id: string;
  center: Center;
}

export interface Right {
  url: string;
}

export interface Left {
  url: string;
}

export interface Center {
  url: string;
}

export interface Card {
  id: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  align: string;
  image: Image;
}

export interface Image {
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
  time: string;
  languge: string;
  location: string;
  name: string;
  slug: string;
  registerationEndDate: string;
  startDate: string;
  amount: number;
  endDate: string;
  applications?: number;
  maxParticipents: number;
  pricing: string;
  locationType: string;
}
