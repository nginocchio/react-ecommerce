import { SetState } from "zustand";
import { Product } from "../../product/types";
import { MyState } from "../../../store/useStore";

export interface CartSlice {
  cartItems: Product[];
  total: number;
  totalQuantity: number;
  taxes: number;
  shipping: number;
  productQuantities: Record<string, number>;
  addItem: (product: Product) => void;
}

export const createCartSlice = (set: SetState<MyState>) => ({
  cartItems: [],
  total: 0,
  totalQuantity: 0,
  taxes: 0,
  shipping: 0,
  productQuantities: {},
  addItem: (product: Product) => set((state) => addItem(product, state)),
  removeItem: (product: Product) => set((state) => removeItem(product, state)),
});

function recalculateTaxes(total: number) {
  return (total = Math.round(total * 0.0985 * 100) / 100);
}

function recalculateShipping(total: number) {
  return total > 9999 ? 0 : 599;
}

const addItem = (product: Product, cart: CartSlice): CartSlice => {
  const newQuantities = cart.productQuantities;
  if (product.id in cart.productQuantities) {
    newQuantities[product.id]++;
    return {
      ...cart,
      total: cart.total + product.price,
      shipping: recalculateShipping(cart.total + product.price),
      taxes: recalculateTaxes(cart.total + product.price),
      totalQuantity: ++cart.totalQuantity,
      productQuantities: newQuantities,
    };
  }
  newQuantities[product.id] = 1;
  return {
    ...cart,
    total: cart.total + product.price,
    shipping: recalculateShipping(cart.total + product.price),
    taxes: recalculateTaxes(cart.total + product.price),
    totalQuantity: ++cart.totalQuantity,
    productQuantities: newQuantities,
    cartItems: [...cart.cartItems, product],
  };
};

const removeItem = (product: Product, cart: CartSlice): CartSlice => {
  const newQuantities = cart.productQuantities;
  if (
    product.id in cart.productQuantities &&
    cart.productQuantities[product.id] > 1
  ) {
    newQuantities[product.id]--;
    return {
      ...cart,
      total: cart.total - product.price,
      shipping: recalculateShipping(cart.total - product.price),
      taxes: recalculateTaxes(cart.total - product.price),
      totalQuantity: --cart.totalQuantity,
      productQuantities: newQuantities,
    };
  } else if (
    product.id in cart.productQuantities &&
    cart.productQuantities[product.id] > 0
  ) {
    delete newQuantities[product.id];
    return {
      ...cart,
      total: cart.total - product.price,
      shipping: recalculateShipping(cart.total - product.price),
      taxes: recalculateTaxes(cart.total - product.price),
      totalQuantity: --cart.totalQuantity,
      productQuantities: newQuantities,
      cartItems: cart.cartItems.filter((cartItem) => cartItem.id === product.id),
    };
  } else {
    console.log("Error trying to remove item that isn't in the cart");
    return cart;
  }
};
