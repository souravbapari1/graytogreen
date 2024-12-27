export interface GeneralFundingsPage {
  generalFundings: GeneralFunding[];
}

export interface GeneralFunding {
  __typename: string;
  title: string;
  bannerDesc: string;
  contact: Contact;
  description: string;
  documentId: string;
  language: Language;
  bannerImage: BannerImage;
  applyFormLink: string;
}
export interface BannerImage {
  __typename: string;
  url: string;
  name: string;
}

export interface Contact {
  __typename: string;
  bookMeetLink: string;
  email: string;
  id: string;
  mobileNo: string;
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
