import { SetState } from "zustand";
import { MyState } from "../../../store/useStore";
import { Product } from "../types";
import { getProduct } from "../api/getProduct";
import { getProducts } from "../api/getProducts";

export function formatPrice(price: number) {
  const fmtPrice = ((price + Number.EPSILON) / 100.0).toFixed(2);
  return `$${fmtPrice}`;
}

export interface ProductSlice {
  products: Product[] | [];
  product: Product | undefined;
  getProducts: () => Promise<void>;
  getProduct: (productId: string) => Promise<void>;
}

export const createProductSlice = (set: SetState<MyState>) => ({
  products: [],
  product: undefined,
  getProducts: async () => {
    const products = await getProducts();
    set({products: products})
  },
  getProduct: async (productId: string) => {
    const product = await getProduct(productId)
    set({product: product})
  }
});
