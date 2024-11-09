export interface SustainableYouthAcademyData {
  sustainableYouthAcademies: SustainableYouthAcademy[];
}

export interface SustainableYouthAcademy {
  documentId: string;
  banner: Banner;
  sustainabilityRegisterCard: SustainabilityRegisterCard;
  Experience: Experience;
  createdAt: string;
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

export interface SustainabilityRegisterCard {
  id: string;
  title: string;
  subtitle: string;
  info: Info[];
  registerBtn: RegisterBtn;
  viewMoreBtn: ViewMoreBtn;
  sideImage: SideImage;
}

export interface Info {
  id: string;
  title: string;
  description: string;
  bannerImage: BannerImage2;
}

export interface BannerImage2 {
  url: string;
}

export interface RegisterBtn {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface ViewMoreBtn {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface SideImage {
  url: string;
}

export interface Experience {
  id: string;
  sortTitle: string;
  title: string;
  experienceCard: ExperienceCard[];
}

export interface ExperienceCard {
  __typename: string;
  description: string;
  id: string;
  title: string;
  topImage: TopImage;
  image: Image;
}

export interface TopImage {
  url: string;
}

export interface Image {
  url: string;
}

export interface Language {
  id: string;
  name: string;
}
