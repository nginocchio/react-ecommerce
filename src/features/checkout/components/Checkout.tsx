import {
  Box,
  HStack,
  VStack,
  Text,
  Flex,
  Image,
  Container,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import { formatPrice } from "../../product/stores/productSlice";
import {Product} from "../../product/types";
import { useStore } from "../../../store/useStore";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
  const cartItems = useStore(state => state.cartItems);
  return (
    <Container maxW={"container.lg"} py={10}>
      <Flex h="100vh">
        <HStack w="full" h="full" alignItems={"flex-start"}>
          <PaymentArea {...cartItems} />
          <OrderItems {...cartItems}/>
        </HStack>
      </Flex>
    </Container>
  );
}

const stripePromise = loadStripe(
  "pk_test_51K5IwLLxHIUxOV4LYb9PrrmwfIYBiSj1CH5HrCyNph2KbIFwxhLu5PtcoNHanDHKmZ0ic3wYEWs0Imx4XPgeu0bZ00MlmzMi9h"
);

function PaymentArea(orderItems: Product[]) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch("/create-payment-intent", {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ items: orderItems }),
    })
      .then((res) => res.json())

      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe"
  };

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <Box w="full">
      {clientSecret && (
        <Elements {...options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  );
}

function OrderItems(orderItems: Product[]) {
  return (
    <VStack w="full">
      <Text fontSize={"2xl"}>Pay with card</Text>
      <OrderLineItem name={"Pants"} id={"PZX18Y"} price={12900} image={"af"} />
      <OrderLineItem name={"Shoes"} id={"DLN18Y"} price={12900} image={"af"} />
      <OrderLineItem name={"Dress"} id={"XMLV2B"} price={2900} image={"af"} />
      <Totals shipping={429} subTotal={12900} taxes={645} />
    </VStack>
  );
}

function OrderLineItem({
  name,
  id,
  price,
  image,
}: {
  name: string;
  id: string;
  price: number;
  image: string;
}) {
  return (
    <Flex justifyContent={"space-between"} w="full" alignItems={"center"}>
      <Flex>
        <Image
          src="https://storage.cloud.google.com/image_bucket_ecommerce/chino-mens.jpg"
          w="100px"
          alt="image alt"
          mr={2}
        />
        <Flex direction={"column"} justifyContent={"center"}>
          <Text fontWeight={"semibold"}>{name}</Text>
          <Text fontWeight={"light"}>{id}</Text>
        </Flex>
      </Flex>
      <Text fontWeight={"semibold"}>{formatPrice(price)}</Text>
    </Flex>
  );
}

function Totals({
  subTotal,
  shipping,
  taxes,
}: {
  subTotal: number;
  shipping: number;
  taxes: number;
}) {
  return (
    <Flex w="full" justifyContent={"space-between"}>
      <Box>
        <Text fontWeight={"semibold"} color={"GrayText"}>
          Subtotal
        </Text>
        <Text fontWeight={"semibold"} color={"GrayText"}>
          Shipping
        </Text>
        <Text fontWeight={"semibold"} color={"GrayText"}>
          Taxes (estimated)
        </Text>
        <Text fontWeight={"semibold"} color={"GrayText"}>
          Total
        </Text>
      </Box>
      <Box>
        <Text textAlign={"right"} fontWeight={"semibold"}>
          {formatPrice(subTotal)}
        </Text>
        <Text textAlign={"right"} fontWeight={"semibold"}>
          {formatPrice(shipping)}
        </Text>
        <Text textAlign={"right"} fontWeight={"semibold"}>
          {formatPrice(taxes)}
        </Text>
        <Text textAlign={"right"} fontWeight={"semibold"}>
          {formatPrice(subTotal + shipping + taxes)}
        </Text>
      </Box>
    </Flex>
  );
}
