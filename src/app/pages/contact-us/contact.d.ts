export interface ContactUseData {
  contactUses: ContactUse[];
}

export interface ContactUse {
  documentId: string;
  conatctLinks: ConatctLink[];
  email: Email[];
  address: Address;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ConatctLink {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface Email {
  id: string;
  name: string;
  email: string;
}

export interface Address {
  id: string;
  name: string;
  address: string;
  mobileNo: string;
  mapLocation: string;
}
