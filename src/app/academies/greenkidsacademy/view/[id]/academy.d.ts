export interface UpcomingAcademyData {
  upcomingAcademies: UpcomingAcademy[];
  upcomingAcademie: UpcomingAcademy;
}

export interface UpcomingAcademy {
  amount: number;
  createdAt: string;
  documentId: string;
  applications: number;
  endDate: string;
  languge: string;
  locale: string;
  location: string;
  locationType: string;
  maxParticipents: number;
  name: string;
  pricing: string;
  publishedAt: string;
  registerationEndDate: string;
  slug: string;
  startDate: string;
  time: string;
  title: string;
  otherComments: string;
  program_Timeline: string;
  content: string;
  aboutTheSession: string;
  Flyer: Flyer[];
  aboutImages: AboutImage[];
  otherCommentsImages: OtherCommentsImage[];
  timeLineImages: TimeLineImage[];
}

export interface Flyer {
  url: string;
}

export interface AboutImage {
  url: string;
}

export interface OtherCommentsImage {
  url: string;
}

export interface TimeLineImage {
  url: string;
}
