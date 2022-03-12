import {
  Box,
  Stack,
  SimpleGrid,
  GridItem,
  Heading,
  Divider,
  Link,
  Button,
} from '@chakra-ui/react'
import { Link as DomLink } from 'react-router-dom'

import { formatPrice } from 'src/features/product/stores/productSlice'

export default function Totals({
  subTotal,
  shipping,
  taxes,
}: {
  subTotal: number
  shipping: number
  taxes: number
}) {
  return (
    <Stack direction={'row'}>
      <Box w="full"></Box>
      <SimpleGrid columns={2} w="full" spacing={2}>
        <GridItem colSpan={2}>
          <Heading>Cart totals</Heading>
        </GridItem>
        <GridItem>Subtotal</GridItem>
        <GridItem>{formatPrice(subTotal)}</GridItem>
        <GridItem>Shipping</GridItem>
        <GridItem>{formatPrice(shipping)}</GridItem>
        <GridItem colSpan={2}>
          <Divider />
        </GridItem>
        <GridItem>Total</GridItem>
        <GridItem>{formatPrice(shipping + subTotal + taxes)}</GridItem>
        <GridItem colSpan={2} marginTop={'1rem'}>
          <Link as={DomLink} to="/checkout">
            <Button colorScheme={'green'} w={'full'} as="a">
              Checkout Now
            </Button>
          </Link>
        </GridItem>
      </SimpleGrid>
    </Stack>
  )
}
