export interface EndowmentsData {
  endowments: Endowment[];
}

export interface Endowment {
  __typename: string;
  bannerImage: BannerImage;
  contact: Contact;
  documentId: string;
  language: Language;
  title: string;
  bannerDesc: string;
  description: string;
}

export interface BannerImage {
  __typename: string;
  url: string;
  name: string;
}

export interface Contact {
  __typename: string;
  mobileNo: string;
  id: string;
  email: string;
  bookMeetLink: string;
  personImage: PersonImage;
  title: string;
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
