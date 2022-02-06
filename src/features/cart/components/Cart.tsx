import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Container,
  Select,
  Flex,
  Box,
  Divider,
  Button,
  Image,
  Table,
  TableCaption,
  Thead,
  Tr,
  Tbody,
  Th,
  Td,
  Tfoot,
  IconButton,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberInputStepper,
  Grid,
  Link,
} from "@chakra-ui/react";

import {Link as DomLink} from "react-router-dom";

import { CloseIcon } from "@chakra-ui/icons";

import shallow from "zustand/shallow";
import { useStore } from "../../../store/useStore";
import { formatPrice } from "../../product/stores/productSlice";

interface ICartItem {
  name: string;
  id: string;
  price: number;
  image: string;
  currency: string;
}

export default function Cart() {
  const { total, shipping, taxes, products, quantities } = useStore(
    (state) => ({
      total: state.total,
      shipping: state.shipping,
      taxes: state.taxes,
      products: state.cartItems,
      quantities: state.productQuantities,
    }),
    shallow
  );

  return (
    <Box h="100vh" maxW={"container.lg"} margin={"auto"}>
      <Heading>Cart</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th>Product</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Quantity</Th>
            <Th isNumeric>Subtotal</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((cartItem) => (
            <Tr key={cartItem.id}>
              <Td>
                <IconButton aria-label="remove item" icon={<CloseIcon />} />
              </Td>
              <Td>
                <Image maxW="100px" src={cartItem.image} alt={"cart item"} />
              </Td>
              <Td>{cartItem.name}</Td>
              <Td isNumeric>{formatPrice(cartItem.price)}</Td>
              <Td isNumeric>
                <NumberInput
                  defaultValue={quantities[cartItem.id]}
                  min={1}
                  max={5}
                  maxW={"100px"}
                  float={"right"}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Td>
              <Td isNumeric>
                {formatPrice(cartItem.price * quantities[cartItem.id])}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Stack direction={"row"}>
        <Box w="full"></Box>
        <SimpleGrid columns={2} w="full" spacing={2}>
          <GridItem colSpan={2}>
            <Heading>Cart totals</Heading>
          </GridItem>
          <GridItem>Subtotal</GridItem>
          <GridItem>$36.00</GridItem>
          <GridItem>Shipping</GridItem>
          <GridItem>$36.00</GridItem>
          <GridItem colSpan={2}>
            <Divider />
          </GridItem>
          <GridItem>Total</GridItem>
          <GridItem>$100.00</GridItem>
          <GridItem colSpan={2} marginTop={"1rem"}>
            <Link as={DomLink} to="/checkout">
              <Button colorScheme={"green"} w={"full"} as="a">
                Checkout Now
              </Button>
            </Link>
          </GridItem>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}

function Details() {
  return (
    <Box>
      <Heading as={"h1"}>Your details</Heading>
      <Text>If you already have an account, click here to log in</Text>
      <SimpleGrid columns={2} columnGap={3} rowGap={3}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input id="firstName" type="text" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input id="lastName" type="text" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input id="address" type="text" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input id="city" type="text" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="country">Last Name</FormLabel>
            <Select placeholder="Select country">
              <option value="United States of America">USA</option>
              <option value="Portugal">Portugal</option>
              <option value="Sweden">Sweden</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w="full" bg={"green.400"}>
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

function CartItem(item: ICartItem) {
  return (
    <Flex
      h={"100px"}
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex alignItems={"center"}>
        <Box w="100px" h="100px">
          <Image src={item.image} alt="cart item" />
        </Box>
        <Box ml={5}>
          <Text fontSize={"md"} fontWeight={"semibold"}>
            {item.name}
          </Text>
          <Text fontSize={"md"}>{item.id}</Text>
        </Box>
      </Flex>
      <Text fontSize={"md"} fontWeight={"semibold"}>
        ${formatPrice(item.price)}
      </Text>
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
    <Box w="full">
      <CartSplitElement
        left={
          <Text color={"gray.600"} fontWeight={"semibold"}>
            Subtotal
          </Text>
        }
        right={<Text fontWeight={"semibold"}>${formatPrice(subTotal)}</Text>}
      />
      <CartSplitElement
        left={
          <Text color={"gray.600"} fontWeight={"semibold"}>
            Shipping
          </Text>
        }
        right={<Text fontWeight={"semibold"}>${formatPrice(shipping)}</Text>}
      />
      <CartSplitElement
        left={
          <Text color={"gray.600"} fontWeight={"semibold"}>
            Taxes
          </Text>
        }
        right={<Text fontWeight={"semibold"}>${formatPrice(taxes)}</Text>}
      />
    </Box>
  );
}

function CartSplitElement({
  left,
  right,
}: {
  left: JSX.Element;
  right: JSX.Element;
}) {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      {left}
      {right}
    </Flex>
  );
}
