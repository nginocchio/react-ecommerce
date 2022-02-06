import shallow from "zustand/shallow";
import { Box, SimpleGrid, Image, Badge } from "@chakra-ui/react";
import { useStore } from "../../../store/useStore";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const fakeData = [
  {
    name: "Bananas",
    id: "1",
    price: 400,
    image: "https://i.imgur.com/AUJQtJC.jpg",
    currency: "USD",
  },
  {
    name: "Tangerines",
    id: "2",
    price: 200,
    image: "https://i.imgur.com/4rVhatT.jpg",
    currency: "USD",
  },
  {
    name: "Pears",
    id: "3",
    price: 200,
    image: "img/pear.jpg",
    currency: "USD",
  },
  {
    name: "Apples",
    id: "4",
    price: 400,
    image: "img/apple.jpg",
    currency: "USD",
  },
  {
    name: "Strawberries",
    id: "5",
    price: 800,
    image: "img/strawberry.jpg",
    currency: "USD",
  },
];

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
    <Box>
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
    </Box>
  );
}
