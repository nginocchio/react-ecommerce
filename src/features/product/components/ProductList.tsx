import shallow from "zustand/shallow";
import { SimpleGrid } from "@chakra-ui/react";
import { useStore } from "../../../store/useStore";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

export default function ProductList() {
  const addItem = useStore((state) => state.addItem);
  const { getProducts, products } = useStore(state => ({getProducts: state.getProducts, products: state.products}), shallow);

  useEffect(() => {
    getProducts();
  }, [])

  function addToCart(product: Product) {
    addItem(product);
  }

  return (
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} p={4}>
        {products && products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </SimpleGrid>
  );
}
