export interface PlanData {
  amount: number;
  collectionId: string;
  collectionName: string;
  completeOrder: boolean;
  created: string;
  expand: Expand;
  gateway_response: GatewayResponse;
  id: string;
  membership: string;
  payurl: string;
  qna: Qna2[];
  qun: number;
  sessionId: string;
  status: string;
  updated: string;
  user: string;
}

export interface Expand {
  membership: Membership;
}

export interface Membership {
  active: boolean;
  amount: number;
  collectionId: string;
  collectionName: string;
  compare_amount: number;
  created: string;
  id: string;
  image: string;
  info: Info[];
  name: string;
  popular: boolean;
  qna: Qna[];
  status: string;
  stocks: number;
  updated: string;
}

export interface Info {
  icon: string;
  title: string;
}

export interface Qna {
  question: string;
  answers: string[];
}

export interface GatewayResponse {
  code: number;
  data: Data;
  description: string;
  success: boolean;
}

export interface Data {
  cancel_url: string;
  client_reference_id: string;
  created_at: string;
  currency: string;
  customer_id: any;
  expire_at: string;
  invoice: string;
  is_cvv_required: boolean;
  metadata: Metadata;
  mode: string;
  payment_status: string;
  products: Product[];
  return_url: any;
  save_card_on_success: boolean;
  session_id: string;
  success_url: string;
  total_amount: number;
}

export interface Metadata {
  amount: string;
  donate: string;
  order_id: string;
  quantity: string;
  user_id: string;
}

export interface Product {
  name: string;
  quantity: number;
  unit_amount: number;
}

export interface Qna2 {
  answers: string;
  qus: string;
}
