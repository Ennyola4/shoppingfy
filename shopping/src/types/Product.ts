export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images?: string[];
  description?: string;
  rating?: number;
  reviews?: number;
  status?: string;
}
