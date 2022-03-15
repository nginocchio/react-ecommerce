import { Flex, Box, Text } from '@chakra-ui/react'

import { formatPrice } from 'src/features/product/stores/productSlice'
import { TotalsProps } from '../types'

export default function Totals({
  subTotal,
  total,
  shipping,
  taxes,
}: TotalsProps) {
  return (
    <Flex w="full" justifyContent={'space-between'}>
      <Box>
        <Text fontWeight={'semibold'} color={'GrayText'}>
          Subtotal
        </Text>
        <Text fontWeight={'semibold'} color={'GrayText'}>
          Shipping
        </Text>
        <Text fontWeight={'semibold'} color={'GrayText'}>
          Taxes (estimated)
        </Text>
        <Text fontWeight={'semibold'} color={'GrayText'}>
          Total
        </Text>
      </Box>
      <Box>
        <Text textAlign={'right'} fontWeight={'semibold'}>
          {formatPrice(subTotal)}
        </Text>
        <Text textAlign={'right'} fontWeight={'semibold'}>
          {formatPrice(shipping)}
        </Text>
        <Text textAlign={'right'} fontWeight={'semibold'}>
          {formatPrice(taxes)}
        </Text>
        <Text textAlign={'right'} fontWeight={'semibold'}>
          {formatPrice(total)}
        </Text>
      </Box>
    </Flex>
  )
}
