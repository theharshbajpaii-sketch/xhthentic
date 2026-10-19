export type ProductSize = 'S' | 'M' | 'L' | 'XL';

export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number; // in INR
  description: string;
  fabricDetails: string[];
  fit: 'Regular' | 'Oversized' | 'Boxy' | 'Heavyweight';
  colors: ProductColor[];
  sizes: ProductSize[];
  badge?: string;
  image: string;
}

export interface CartItem {
  id: string; // generated unique id: `${product.id}-${color}-${size}`
  productId: string;
  name: string;
  price: number;
  size: ProductSize;
  colorName: string;
  colorHex: string;
  image: string;
  quantity: number;
}

export interface CheckoutFormState {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  paymentMethod: 'card' | 'upi' | 'cod';
}
