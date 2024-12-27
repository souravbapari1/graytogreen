export interface SupportResearchAndExperimentData {
  supportResearchAndExperiments: SupportResearchAndExperiment[];
}

export interface SupportResearchAndExperiment {
  applyLink: ApplyLink;
  banner: Banner;
  contact: Contact;
  content: string;
  publishedAt: string;
  createdAt: string;
  documentId: string;
}

export interface ApplyLink {
  linkUrl: string;
  linkText: string;
  id: string;
}

export interface Banner {
  title: string;
  id: string;
  description: string;
  bannerImage: BannerImage;
}

export interface BannerImage {
  url: string;
}

export interface Contact {
  title: string;
  mobileNo: string;
  id: string;
  email: string;
  bookMeetLink: string;
  personImage: PersonImage;
}

export interface PersonImage {
  url: string;
}
