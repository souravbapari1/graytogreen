export interface PaymentData {
  amount: number;
  collectionId: string;
  collectionName: string;
  created: string;
  data: Data;
  donate: string;
  id: string;
  orderPlaced: boolean;
  payurl: string;
  project: string;
  quantity: number;
  sessionId: string;
  status: string;
  updated: string;
  user: string;
}

export interface Data {
  code: number;
  data: Data2;
  description: string;
  success: boolean;
}

export interface Data2 {
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
  project: string;
  quantity: string;
  user_id: string;
}

export interface Product {
  name: string;
  quantity: number;
  unit_amount: number;
}
