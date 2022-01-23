import create from "zustand";
import { devtools } from "zustand/middleware";
import { createCartSlice, CartSlice } from "./cartSlice";
import { ProductSlice, createProductSlice } from "./productSlice";

export type MyState = CartSlice & ProductSlice

export const useStore = create<MyState>(
    devtools((set) => ({
        ...createCartSlice(set),
        ...createProductSlice(set),
    }))
);