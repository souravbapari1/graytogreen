export interface DonateForLands {
  donateForLands: DonateForLand[];
}

export interface DonateForLand {
  __typename: string;
  bannerDesc: string;
  contact: Contact;
  createdAt: string;
  description: string;
  documentId: string;
  language: Language;
  publishedAt: string;
  requestFormLink: string;
  title: string;
  bannerImage: BannerImage;
}

export interface Contact {
  __typename: string;
  personImage: PersonImage;
  mobileNo: string;
  id: string;
  email: string;
  bookMeetLink: string;
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

export interface BannerImage {
  __typename: string;
  url: string;
}
