export interface PaymentVerifyData {
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
  donate: string;
  project: string;
  amount: string;
  quantity: string;
}
