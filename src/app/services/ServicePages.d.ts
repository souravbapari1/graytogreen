export interface ServicePages {
  services: Service[];
}

export interface Service {
  title: string;
  documentId: string;
  description: string;
  Industries: Industry[];
  language: Language;
  createdAt: string;
  Service_Cards: ServiceCard[];
}

export interface Industry {
  id: string;
  image: Image;
  title: string;
}

export interface Image {
  url: string;
}

export interface Language {
  name: string;
}

export interface ServiceCard {
  title: string;
  link: Link;
  id: string;
  Description: string;
  Icon: Icon;
}

export interface Link {
  linkUrl: string;
  linkText: string;
}

export interface Icon {
  url: string;
}
