export interface AcademicOrder {
  academic: Academic;
  applicationData: ApplicationData;
  collectionId: string;
  collectionName: string;
  created: string;
  expand: Expand;
  id: string;
  othersData: OthersData;
  status: string;
  updateBy: string;
  updated: string;
  user: string;
}

export interface Academic {
  amount: number;
  name: string;
  documentId: string;
  applications: any;
  maxParticipents: number;
  pricing: string;
  time: string;
  title: string;
  startDate: string;
  slug: string;
  registerationEndDate: string;
  locationType: string;
  endDate: string;
  languge: string;
  location: string;
  __typename: string;
}

export interface ApplicationData {
  participants: Participant[];
  parent: Parent;
  message: string;
  participantQuestion: string;
}

export interface Participant {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
  school: string;
  grade: string;
  tshirtSize: string;
}

export interface Parent {
  title: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  relation: string;
  city: string;
  country: string;
  state: string;
}

export interface Expand {
  user: User;
}

export interface User {
  allowPermission: any;
  avatar: string;
  breef: string;
  city: string;
  collectionId: string;
  collectionName: string;
  company: string;
  complete: boolean;
  country: string;
  created: string;
  dob: string;
  dpartements: any;
  email: string;
  emailVisibility: boolean;
  first_name: string;
  gender: string;
  id: string;
  instagram: string;
  isBlocked: boolean;
  lastLogin: string;
  last_name: string;
  level: string;
  linkedin: string;
  location: string;
  mamberships: any[];
  mobile_no: string;
  position: string;
  role: string;
  socail_state: string;
  targetCo2Save: number;
  targetPlastic: number;
  targetTrees: number;
  tree_orders: string[];
  twitter: string;
  updated: string;
  user_type: string;
  username: string;
  verified: boolean;
  wallet: number;
  whyYouHere: string;
  youtube: string;
}

export interface OthersData {
  success: boolean;
  code: number;
  description: string;
  data: Data;
}

export interface Data {
  mode: string;
  session_id: string;
  client_reference_id: string;
  customer_id: any;
  products: Product[];
  total_amount: number;
  currency: string;
  success_url: string;
  cancel_url: string;
  return_url: any;
  payment_status: string;
  invoice: string;
  save_card_on_success: boolean;
  metadata: Metadata;
  is_cvv_required: boolean;
  created_at: string;
  expire_at: string;
}

export interface Product {
  name: string;
  unit_amount: number;
  quantity: number;
}

export interface Metadata {
  user_id: string;
  order_id: string;
  amount: string;
  quantity: string;
}
