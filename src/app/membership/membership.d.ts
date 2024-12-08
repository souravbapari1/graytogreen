export interface MembershipPageData {
  membershipPage: MembershipPage;
}

export interface MembershipPage {
  headerDescription: string;
  headerImage: HeaderImage;
  locale: string;
  thankYouComment: string;
}

export interface HeaderImage {
  url: string;
}
