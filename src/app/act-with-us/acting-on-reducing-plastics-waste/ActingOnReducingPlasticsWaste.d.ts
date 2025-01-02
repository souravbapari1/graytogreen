export interface ActingOnReducingPlasticsWaste {
  actingOnReducingPlasticsWastes: ActingOnReducingPlasticsWaste[];
}

export interface ActingOnReducingPlasticsWaste {
  banner: Banner;
  applyLink: ApplyLink;
  contact: Contact;
  content: string;
  publishedAt: string;
  updatedAt: string;
  documentId: string;
  createdAt: string;
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

export interface ApplyLink {
  linkUrl: string;
  linkText: string;
  id: string;
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
