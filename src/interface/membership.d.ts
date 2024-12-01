export interface MembershipItem {
  active: boolean;
  amount: number;
  collectionId: string;
  collectionName: string;
  compare_amount: number;
  created: string;
  id: string;
  image: string;
  info?: Info[];
  name: string;
  qna: Qna[];
  status: string;
  updated: string;
}

export interface Info {
  icon: string;
  title: string;
}

export interface Qna {
  qus?: string;
  answers: any[];
  question?: string;
}

export interface MemberShipPayment {
  amount: number;
  collectionId: string;
  collectionName: string;
  completeOrder: boolean;
  created: string;
  gateway_response?: GatewayResponse;
  id: string;
  membership: string;
  payurl: string;
  qna: Qna[];
  sessionId: string;
  updated: string;
  user: string;
  status: "pending" | "confirm" | "cancel";
}

export interface GatewayResponse {
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

export interface Qna {
  answers: string;
  qus: string;
}
