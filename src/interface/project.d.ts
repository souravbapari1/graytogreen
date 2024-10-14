export type ProjectType = {
  image: string;
  type: string;
  count: number;
  country: string;
  price: number;
  status: string;
};

export interface ProjectDataType {
  _id: string;
  allow: boolean;
  projectName: string;
  projectImage: string;
  MainInterventions: MainIntervention[];
  projectType: string;
  numberOfTargetUnits: number;
  omrUnit: number;
  unitMeasurement: string;
  typeOfUnit: TypeOfUnit[];
  operatedBy: OperatedBy[];
  startDate: string;
  projectStatus: string;
  sortDesc: string;
  city: string;
  country: string;
  location: string;
  challengesAndImpactDetails: string;
  challengesAndImpactDetailsImages: ChallengesAndImpactDetailsImage[];
  challengesAndImpactDetailsVideos: ChallengesAndImpactDetailsVideo[];
  projectContent: string;
  projectContentImages: ProjectContentImage[];
  projectContentVideos: ProjectContentVideo[];
  sustainableDevelopmentGoal: SustainableDevelopmentGoal[];
  reports: Report[];
  contact: Contact;
  projectMap: ProjectMap;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface MainIntervention {
  text: string;
  value: string;
}

export interface TypeOfUnit {
  text: string;
  value: string;
}

export interface OperatedBy {
  text: string;
  value: string;
}

export interface ChallengesAndImpactDetailsImage {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface ChallengesAndImpactDetailsVideo {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface ProjectContentImage {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface ProjectContentVideo {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface SustainableDevelopmentGoal {
  title: string;
  desc: string;
  parameters: Parameter[];
}

export interface Parameter {
  title: string;
  value: string;
}

export interface Report {
  file: string;
  title: string;
  desc: string;
}

export interface Contact {
  website: string;
  emailID: string;
  location: string;
}

export interface ProjectMap {
  marker: Marker;
  workSpace: WorkSpace;
}

export interface Marker {
  image: string;
  color: string;
  name: string;
  position: Position;
}

export interface Position {
  lng: number;
  lat: number;
}

export interface WorkSpace {
  type: string;
  features: Feature[];
}

export interface Feature {
  id: string;
  type: string;
  geometry: Geometry;
}

export interface Geometry {
  coordinates: number[][][];
  type: string;
}
