export interface SponsorData {
  homePages: HomePage[];
}

export interface HomePage {
  sponsors: Sponsor[];
}

export interface Sponsor {
  id: string;
  name: string;
  url: string;
  brandImage: BrandImage;
}

export interface BrandImage {
  url: string;
}
