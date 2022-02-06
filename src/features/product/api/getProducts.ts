import { Product } from "../types"

export const getProducts = async (): Promise<Product[]> => {
    let res = await fetch(`/api/products`)
    return res.json();
}