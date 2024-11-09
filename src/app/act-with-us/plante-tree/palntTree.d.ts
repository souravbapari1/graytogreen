export interface PlantTreeData {
  plantTrees: PlantTree[];
}

export interface PlantTree {
  documentId: string;
  banner: Banner;
  content: string;
  applyLink: ApplyLink;
  contact: Contact;
  language: Language;
}

export interface Banner {
  id: string;
  title: string;
  description: string;
  bannerImage: BannerImage;
}

export interface BannerImage {
  url: string;
}

export interface ApplyLink {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface Contact {
  id: string;
  email: string;
  mobileNo: string;
  bookMeetLink: string;
  personImage: PersonImage;
  title: string;
}

export interface PersonImage {
  url: string;
}

export interface Language {
  id: string;
  name: string;
}
