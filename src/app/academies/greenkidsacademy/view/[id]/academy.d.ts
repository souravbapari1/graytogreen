export interface UpcomingAcademyData {
  upcomingAcademies: UpcomingAcademy[];
}

export interface UpcomingAcademy {
  documentId: string;
  title: string;
  date: string;
  time: string;
  languge: string;
  location: string;
  name: string;
  content: string;
  slug: string;
  maxParticipants: string;
}
