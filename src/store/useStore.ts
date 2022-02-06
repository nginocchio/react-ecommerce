import create from "zustand";
import { devtools } from "zustand/middleware";
import { createCartSlice, CartSlice } from "../features/cart/stores/cartSlice";
import { ProductSlice, createProductSlice } from "../features/product/stores/productSlice";

export type MyState = CartSlice & ProductSlice

export const useStore = create<MyState>(
    devtools((set) => ({
        ...createCartSlice(set),
        ...createProductSlice(set),
    }))
);