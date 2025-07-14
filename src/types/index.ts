export interface CartItem {
  id: string;
  nameEn: string;
  nameTe: string;
  price: number;
  unit: string;
  unitTe: string;
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  mobile: string;
}

export interface OrderData {
  items: CartItem[];
  customer: CustomerInfo;
  total: number;
  orderDate: Date;
  orderId: string;
}