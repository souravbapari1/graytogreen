export interface ResearchesLabData {
  researchesLabs: ResearchesLab[];
  researchLabsPrograms: ResearchLabsProgram[];
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
  image: Image2;
}

export interface Image2 {
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
  image: Image3;
  about: string;
  id: string;
  linkdinProfile: string;
}

export interface Image3 {
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
  image: Image4;
}

export interface Image4 {
  url: string;
}

export interface TextSlides {
  bgImage: BgImage;
  id: string;
  text: Text[];
}

export interface BgImage {
  url: string;
}

export interface Text {
  id: string;
  content: string;
}

export interface ResearchLabsProgram {
  Apply_Link: string;
  content: string;
  createdAt: string;
  description: string;
  documentId: string;
  icon: Icon;
  image: Image5;
  title: string;
  publishedAt: string;
  updatedAt: string;
}

export interface Icon {
  url: string;
}

export interface Image5 {
  url: string;
}
