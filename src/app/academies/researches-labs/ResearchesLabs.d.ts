export interface ResearchesLabData {
  researchesLabs: ResearchesLab[];
}

export interface ResearchesLab {
  documentId: string;
  header: Header;
  challenges: Challenges;
  infoCards: InfoCards;
  textSlides: TextSlides;
  researchPartner: ResearchPartner[];
  about: About;
  members: Members;
}

export interface Header {
  id: string;
  title: string;

  description: string;
  images: Images;
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

export interface Challenges {
  id: string;
  sortTitle: string;
  title: string;
  experienceCard: ExperienceCard[];
}

export interface ExperienceCard {
  id: string;
  title: string;
  description: string;
  topImage: TopImage;
  image: Image;
  link: Link;
}

export interface TopImage {
  url: string;
}

export interface Image {
  url: string;
}

export interface Link {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface InfoCards {
  id: string;
  title: string;
  description: string;
  cards: Card[];
}

export interface Card {
  id: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  align: string;
  image: Image2;
}

export interface Image2 {
  url: string;
}

export interface TextSlides {
  id: string;
  bgImage: BgImage;
  text: Text[];
}

export interface BgImage {
  url: string;
}

export interface Text {
  id: string;
  content: string;
}

export interface ResearchPartner {
  id: string;
  title: string;
  member: Member[];
}

export interface Member {
  id: string;
  name?: string;
  link?: string;
  image: Image3;
}

export interface Image3 {
  url: string;
}

export interface About {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  align: string;
  image: Image4;
}

export interface Image4 {
  url: string;
}

export interface Members {
  id: string;
  member: Member2[];
  title: string;
  description: string;
}

export interface Member2 {
  id: string;
  name: string;
  about: string;
  image: Image5;
  linkdinProfile: string;
  position: string;
}

export interface Image5 {
  url: string;
}
