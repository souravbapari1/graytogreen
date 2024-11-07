export interface MonthlySummitTalksData {
  monthlySummitTalks: MonthlySummitTalk[];
}
export interface MonthlySummitTalk {
  __typename: string;
  documentId: string;
  header: Header;
  youthSummitTalks: YouthSummitTalks;
  experience: Experience;
  language: Language;
  sessionsCards: SessionsCards;
  upcomingSession: UpcomingSession;
}

export interface Header {
  __typename: string;
  description: string;
  id: string;
  title: string;
  rightImage: RightImage;
  leftImage: LeftImage;
  centerImage: CenterImage;
}

export interface RightImage {
  __typename: string;
  url: string;
}

export interface LeftImage {
  __typename: string;
  url: string;
}

export interface CenterImage {
  __typename: string;
  url: string;
}

export interface YouthSummitTalks {
  __typename: string;
  title: string;
  sortTitle: string;
  linkUrl: string;
  linkText: string;
  id: string;
  description: string;
  image: Image;
}

export interface Image {
  __typename: string;
  url: string;
}

export interface Experience {
  __typename: string;
  id: string;
  sortTitle: string;
  title: string;
  experienceCard: ExperienceCard[];
}

export interface ExperienceCard {
  __typename: string;
  description: string;
  id: string;
  title: string;
  topImage: TopImage;
  image: Image2;
}

export interface TopImage {
  __typename: string;
  url: string;
}

export interface Image2 {
  __typename: string;
  url: string;
}

export interface Language {
  __typename: string;
  id: string;
  name: string;
}

export interface SessionsCards {
  __typename: string;
  title: string;
  registerSessionLink: string;
  registerIndividualsSessionLink: string;
  id: string;
  description: string;
}

export interface UpcomingSession {
  __typename: string;
  title: string;
  subTitle: string;
  sessionInfo: string;
  id: string;
  description: string;
  sessionDateTime: string;
  centerImage: CenterImage2;
  leftImage: LeftImage2;
  rightImage: RightImage2;
}

export interface CenterImage2 {
  __typename: string;
  url: string;
}

export interface LeftImage2 {
  __typename: string;
  url: string;
}

export interface RightImage2 {
  __typename: string;
  url: string;
}
