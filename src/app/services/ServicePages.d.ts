export interface ServicePages {
  services: Service[];
}

export interface Service {
  __typename: string;
  title: string;
  documentId: string;
  description: string;
  Industries: Industry[];
  language: Language;
}

export interface Industry {
  __typename: string;
  id: string;
  image: Image;
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
