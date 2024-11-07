export interface BeVolunteers {
  beVolunteers: BeVolunteer[];
}

export interface BeVolunteer {
  __typename: string;
  applyFormLink: string;
  bannerDesc: string;
  contact: Contact;
  description: string;
  createdAt: string;
  documentId: string;
  publishedAt: string;
  title: string;
  language: Language;
  bannerImage: BannerImage;
}

export interface Contact {
  __typename: string;
  personImage: PersonImage;
  mobileNo: string;
  id: string;
  email: string;
  bookMeetLink: string;
}

export interface PersonImage {
  __typename: string;
  url: string;
}

export interface Language {
  __typename: string;
  name: string;
  id: string;
}

export interface BannerImage {
  __typename: string;
  url: string;
}
