export interface ResearchesLabData {
  researchesLabs: ResearchesLab[];
}
export interface ResearchesLab {
  about: About;
  challenges: Challenges;
  header: Header;
  documentId: string;
  infoCards: InfoCards;
  members: Members;
  researchPartner: ResearchPartner[];
  textSlides: TextSlides;
  locale: string;
}

export interface About {
  title: string;
  linkUrl: string;
  linkText: string;
  image: Image;
  id: string;
  description: string;
  align: string;
}

export interface Image {
  url: string;
}

export interface Challenges {
  title: string;
  sortTitle: string;
  id: string;
  experienceCard: ExperienceCard[];
}

export interface ExperienceCard {
  title: string;
  link: Link;
  id: string;
  description: string;
  image: Image2;
  topImage: TopImage;
}

export interface Link {
  linkUrl: string;
  linkText: string;
  id: string;
}

export interface Image2 {
  url: string;
}

export interface TopImage {
  url: string;
}

export interface Header {
  title: string;
  description: string;
  images: Images;
  id: string;
}

export interface Images {
  id: string;
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

export interface InfoCards {
  title: string;
  id: string;
  description: string;
  cards: Card[];
}

export interface Card {
  title: string;
  linkUrl?: string;
  linkText?: string;
  id: string;
  description: string;
  align: string;
  image: Image3;
}

export interface Image3 {
  url: string;
}

export interface Members {
  title: string;
  id: string;
  description: string;
  member: Member[];
}

export interface Member {
  name: string;
  position: string;
  image: Image4;
  about: string;
  id: string;
  linkdinProfile: string;
}

export interface Image4 {
  url: string;
}

export interface ResearchPartner {
  title: string;
  id: string;
  member: Member2[];
}

export interface Member2 {
  name?: string;
  link?: string;
  id: string;
  image: Image5;
}

export interface Image5 {
  url: string;
}

export interface TextSlides {
  bgImage: BgImage;
  id: string;
  text: any[];
}

export interface BgImage {
  url: string;
}
