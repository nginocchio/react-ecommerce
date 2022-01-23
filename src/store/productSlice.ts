import { SetState } from "zustand";
import { MyState } from "./useStore";

export function formatPrice(price: number) {
  const fmtPrice = ((price + Number.EPSILON) / 100.0).toFixed(2);
  return `$${fmtPrice}`;
}

export interface Product {
  name: string;
  id: string;
  price: number;
  image: string;
  currency: string;
}

export interface ProductSlice {
  products: Product[];
  product: Product | undefined;
  getProducts: () => void;
  getProduct: (productId: string | undefined) => void;
}

export const createProductSlice = (set: SetState<MyState>) => ({
  products: [],
  product: undefined,
  getProducts: async () => {
    const response = await fetch("/api/products");
    const json = await response.json();
    set({ products: json });
  },
  getProduct: async (productId: string | undefined) => {
    const response = await fetch(`/api/products/${productId}`);
    const json = await response.json();
    set({ product: json });
  },
});
