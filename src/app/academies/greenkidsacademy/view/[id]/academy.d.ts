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
  otherComments: any;
  program_Timeline: any;
  content: string;
  aboutTheSession: any;
  Flyer: Flyer[];
}

export interface Flyer {
  url: string;
}
