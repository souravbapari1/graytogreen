export interface LicensesAndCertificationsData {
  licensesAndCertifications: LicensesAndCertification[];
}

export interface LicensesAndCertification {
  __typename: string;
  banner: Banner;
  certifications: Certification[];
  documentId: string;
  language: Language;
}

export interface Banner {
  __typename: string;
  title: string;
  id: string;
  description: string;
  bannerImage: BannerImage;
}

export interface BannerImage {
  __typename: string;
  url: string;
}

export interface Certification {
  __typename: string;
  description: string;
  id: string;
  title: string;
  file: File;
}

export interface File {
  __typename: string;
  url: string;
}

export interface Language {
  __typename: string;
  name: string;
}
