import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Flex,
  Image,
  Container,
} from "@chakra-ui/react";
import { formatPrice } from "../store/productSlice";

export default function Checkout() {
  return (
    <Container maxW={"container.lg"} py={10}>
      <Flex h="100vh">
        <HStack w="full" h="full" alignItems={"flex-start"}>
          <PaymentArea />
          <OrderItems />
        </HStack>
      </Flex>
    </Container>
  );
}

function PaymentArea() {
  return (
    <Box w="full">
      <Heading>Pay here</Heading>
    </Box>
  );
}

function OrderItems() {
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
