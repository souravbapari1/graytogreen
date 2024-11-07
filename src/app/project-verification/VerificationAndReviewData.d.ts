export interface VerificationAndReviewsData {
  verificationAndReviews: VerificationAndReview[];
}

export interface VerificationAndReview {
  __typename: string;
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

export interface ApplyInfoSteps {
  __typename: string;
  yourBenefits: string;
  title: string;
  id: string;
  howToApply: string;
  howReviewsWork: string;
  description: string;
}

export interface CardList {
  __typename: string;
  align: string;
  description: string;
  id: string;
  image: Image;
  linkText: any;
  linkUrl: any;
  title: string;
}

export interface Image {
  __typename: string;
  url: string;
}

export interface Language {
  __typename: string;
  name: string;
  id: string;
}

export interface VerificationStep {
  __typename: string;
  title: string;
  linkUrl: string;
  linkText: string;
  id: string;
  description: string;
}

export interface Members {
  __typename: string;
  id: string;
  member: Member[];
  title: string;
  description: string;
}

export interface Member {
  __typename: string;
  about: string;
  id: string;
  linkdinProfile: string;
  name: string;
  position: string;
  image: Image2;
}

export interface Image2 {
  __typename: string;
  url: string;
}
