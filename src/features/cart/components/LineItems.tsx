import {
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Select,
  Box,
  Button,
  Table,
  Thead,
  Tr,
  Tbody,
  Th,
} from '@chakra-ui/react'

import shallow from 'zustand/shallow'
import { useStore } from '../../../store/useStore'
import LineItem from './LineItem'
import Totals from './Totals'

export default function LineItems() {
  const { total, shipping, taxes, products, quantities } = useStore(
    (state) => ({
      total: state.total,
      shipping: state.shipping,
      taxes: state.taxes,
      products: state.cartItems,
      quantities: state.productQuantities,
    }),
    shallow
  )

  if (products.length < 1) {
    return <Text>Looks like your cart is empty.</Text>
  }

  return (
    <Box h="100vh" maxW={'container.lg'} margin={'auto'}>
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
            <LineItem item={cartItem} quantities={quantities} />
          ))}
        </Tbody>
      </Table>
      <Totals shipping={shipping} subTotal={total} taxes={taxes} />
    </Box>
  )
}

function Details() {
  return (
    <Box>
      <Heading as={'h1'}>Your details</Heading>
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
          <Button w="full" bg={'green.400'}>
            Place order
          </Button>
        </GridItem>
      </SimpleGrid>
    </Box>
  )
}
