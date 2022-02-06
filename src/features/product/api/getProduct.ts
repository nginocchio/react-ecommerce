import { Product } from "../types"

export const getProduct = async (productId: string): Promise<Product> => {
    let res = await fetch(`/api/products/${productId}`)
    return res.json();
}