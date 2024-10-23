export interface SDGITEM {
  collectionId: string;
  collectionName: string;
  created: string;
  data: Daum[];
  description: string;
  expand: Expand;
  id: string;
  name: string;
  sdg: string;
  updated: string;
}

export interface Daum {
  name: string;
  value: string;
}

export interface Expand {
  sdg: Sdg;
}

export interface Sdg {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  image: string;
  main_color: string;
  name: string;
  parameters: string[];
  sub_color: string;
  updated: string;
}
