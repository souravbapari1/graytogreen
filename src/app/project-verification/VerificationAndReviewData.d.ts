export interface VerificationAndReviewsData {
  verificationAndReviews: VerificationAndReview[];
}

export interface VerificationAndReview {
  banner: Banner;
  applyInfoSteps: ApplyInfoSteps;
  cardList: CardList[];
  documentId: string;
  language: Language;
  reportFraudDesc: string;
  reportFraudTitle: string;
  verificationSteps: VerificationStep[];
  members: Members;
  headerLink: string;
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

export interface ApplyInfoSteps {
  yourBenefits: string;
  title: string;
  id: string;
  howToApply: string;
  howReviewsWork: string;
  description: string;
  Apply_Link: ApplyLink;
}

export interface ApplyLink {
  linkUrl: string;
  linkText: string;
  id: string;
}

export interface CardList {
  align: string;
  description: string;
  id: string;
  image: Image;
  linkText: any;
  linkUrl: any;
  title: string;
}

export interface Image {
  url: string;
}

export interface Language {
  name: string;
  id: string;
}

export interface VerificationStep {
  title: string;
  linkUrl: string;
  linkText: string;
  id: string;
  description: string;
}

export interface Members {
  id: string;
  member: any[];
  title: string;
  description: string;
}
