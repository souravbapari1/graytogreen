export interface AboutUseData {
  aboutUses: AboutUse[];
  teamMember: TeamMember;
  g2GAmbassador: G2Gambassador;
}

export interface AboutUse {
  bordMembers: BordMembers;
  documentId: string;
  educationalAdvisors: EducationalAdvisors;
  esg: Esg;
  foundationCouncil: FoundationCouncil;
  foundationCouncilLink1: FoundationCouncilLink1;
  foundationCouncilLink2: FoundationCouncilLink2;
  header: Header;
  missionAndVission: MissionAndVission;
  parteners: Parteners;
  scientificAndSustainabilityAdvisors: ScientificAndSustainabilityAdvisors;
}

export interface BordMembers {
  id: string;
  member: Member[];
  title: string;
  description: string;
}

export interface Member {
  id: string;
  name: string;
  about: string;
  image: Image;
  linkdinProfile: string;
  position: string;
}

export interface Image {
  url: string;
}

export interface EducationalAdvisors {
  id: string;
  member: Member2[];
  title: string;
  description: string;
}

export interface Member2 {
  id: string;
  name: string;
  about: string;
  image: Image2;
  linkdinProfile: string;
  position: string;
}

export interface Image2 {
  url: string;
}

export interface Esg {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  align: string;
  image: Image3;
  More_Links: MoreLink[];
}

export interface Image3 {
  url: string;
}

export interface MoreLink {
  linkText: string;
  linkUrl: string;
  id: string;
}

export interface FoundationCouncil {
  id: string;
  member: Member3[];
  title: string;
  description: string;
}

export interface Member3 {
  id: string;
  name: string;
  about: string;
  image: Image4;
  linkdinProfile: string;
  position: string;
}

export interface Image4 {
  url: string;
}

export interface FoundationCouncilLink1 {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface FoundationCouncilLink2 {
  id: string;
  linkText: string;
  linkUrl: string;
}

export interface Header {
  id: string;
  title: string;
  description: string;
  images: Images;
}

export interface Images {
  id: string;
  center: Center;
  left: Left;
  right: Right;
}

export interface Center {
  url: string;
}

export interface Left {
  url: string;
}

export interface Right {
  url: string;
}

export interface MissionAndVission {
  id: string;
  title: string;
  description: string;
  images: Images2;
}

export interface Images2 {
  right: Right2;
  left: Left2;
  center: Center2;
}

export interface Right2 {
  url: string;
}

export interface Left2 {
  url: string;
}

export interface Center2 {
  url: string;
}

export interface Parteners {
  id: string;
  member: Member4[];
  title: string;
  description: string;
}

export interface Member4 {
  id: string;
  name: string;
  about: string;
  image: Image5;
  linkdinProfile: string;
  position: string;
}

export interface Image5 {
  url: string;
}

export interface ScientificAndSustainabilityAdvisors {
  id: string;
  member: Member5[];
  title: string;
  description: string;
}

export interface Member5 {
  id: string;
  name: string;
  about: string;
  image: Image6;
  linkdinProfile: string;
  position: string;
}

export interface Image6 {
  url: string;
}

export interface TeamMember {
  Teams: Team[];
  title: string;
  description: string;
}

export interface Team {
  members: Member6[];
  tabName: string;
  id: string;
}

export interface Member6 {
  id: string;
  name: string;
  about: string;
  image: Image7;
  linkdinProfile: string;
  position: string;
}

export interface Image7 {
  url: string;
}

export interface G2Gambassador {
  Description: string;
  Title: string;
  Members: Member7[];
}

export interface Member7 {
  tabName: string;
  id: string;
  members: Member8[];
}

export interface Member8 {
  position: string;
  name: string;
  linkdinProfile: string;
  id: string;
  about: string;
  image: Image8;
}

export interface Image8 {
  url: string;
}
