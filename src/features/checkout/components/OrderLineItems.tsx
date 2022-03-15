import { VStack, Text } from '@chakra-ui/react'

import { Product } from 'src/features/product'
import OrderLineItem from './OrderLineItem'

export default function OrderLineItems({
  orderItems,
}: {
  orderItems: Product[]
}) {
  return (
    <VStack w="full">
      <Text fontSize={'2xl'}>Pay with card</Text>
      {orderItems.map((item) => (
        <OrderLineItem
          name={item.name}
          id={item.id}
          price={item.price}
          image={item.image}
        />
      ))}
    </VStack>
  )
}
