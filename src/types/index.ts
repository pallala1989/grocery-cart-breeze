
export interface ProductVariant {
  id: string;
  size: string;
  sizeTe: string;
  unit: string;
  unitTe: string;
  price: number;
}

export interface Product {
  id: string;
  nameEn: string;
  nameTe: string;
  category: string;
  categoryTe: string;
  image: string;
  variants: ProductVariant[];
  inStock: boolean;
  description?: string;
  descriptionTe?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  nameEn: string;
  nameTe: string;
  price: number;
  size: string;
  sizeTe: string;
  unit: string;
  unitTe: string;
  orderQuantity: number;
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
