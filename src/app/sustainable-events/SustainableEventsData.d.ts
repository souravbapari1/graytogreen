export interface SustainableEventData {
  sustainableEvents: SustainableEvent[];
}

export interface SustainableEvent {
  __typename: string;
  benefitsTitle: string;
  documentId: string;
  speechsoundlike: Speechsoundlike;
  benefit: Benefit[];
  contact: Contact;
  giveyouthavoice: Giveyouthavoice;
  headerBanner: HeaderBanner;
  language: {
    name: string;
    id: string;
  };
}

export interface Speechsoundlike {
  __typename: string;
  videoId: string;
  title: string;
  id: string;
}

export interface Benefit {
  __typename: string;
  description: string;
  id: string;
  image: Image;
  title: string;
}

export interface Image {
  __typename: string;
  url: string;
}

export interface Contact {
  __typename: string;
  bookMeetLink: string;
  email: string;
  id: string;
  mobileNo: string;
  personImage: PersonImage;
}

export interface PersonImage {
  __typename: string;
  url: string;
}

export interface Giveyouthavoice {
  __typename: string;
  RequesOfflineForm: string;
  RequesOnlineFormLink: string;
  bannerImage: BannerImage;
  description: string;
  id: string;
  title: string;
}

export interface BannerImage {
  __typename: string;
  url: string;
}

export interface HeaderBanner {
  __typename: string;
  description: string;
  id: string;
  title: string;
  bannerImage: BannerImage2;
}

export interface BannerImage2 {
  __typename: string;
  url: string;
}
