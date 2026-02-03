// src/contexts/cart.types.ts
export interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    images?: string[];
  };
  quantity: number;
  size: string;
  color: string;
}
