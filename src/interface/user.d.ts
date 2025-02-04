import { MembershipItem } from "./membership";

export interface UserItem {
  avatar: string;
  city: string;
  collectionId: string;
  collectionName: string;
  company: string;
  country: string;
  created: string;
  dob: string;
  email: string;
  emailVisibility: boolean;
  expand?: Expand;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  mobile_no: string;
  role: string;
  socail_state: string;
  updated: string;
  user_type: string;
  username: string;
  verified: boolean;
  tree_orders?: string[];
  breef: string;
  whyYouHere: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  youtube: string;
  targetTrees: string;
  targetPlastic: string;
  targetCo2Save: string;
  mamberships: string[];
  isBlocked?: boolean;
  approvedBy?: string;
  approvedDate: string;
  level?: string;
  lastLogin?: string;
  allowPermission?: string[];
  rejectReason?: string;
  wallet: number;
  position?: string;
  dpartements?: string[] | null;
  location?: string;
}

export interface Expand {
  company?: Company;
  mamberships?: MembershipItem[];
}

export interface Company {
  Industry_type: string;
  about_us: string;
  application_name: string;
  city: string;
  collectionId: string;
  collectionName: string;
  company_name: string;
  country: string;
  created: string;
  id: string;

  mr_ms: string;
  position: string;
  resonses: string[];
  size_hint: string;
  updated: string;
  website: string;
  address: string;
  map_location: string;
  approved_status: "pending" | "approved" | "rejected";
  companyType?: string;
  summery?: {
    annualBudget?: string;
    categoriesConsider?: string;

    othersComment?: string;
  };
}
