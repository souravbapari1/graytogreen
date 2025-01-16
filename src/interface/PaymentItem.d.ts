import { ProjectItem } from "./project";
import { UserItem } from "./user";

export interface OrderPayItem {
  amount: number;
  donate: string;
  expand: Expand;
  id: string;
  orderPlaced: boolean;
  status: string;
  quantity: number;
  created: string;
  updated: string;
  support: string;
}

interface Expand {
  project: ProjectItem;
  user: UserItem;
  support?: UserItem;
}
