import { Flex, Image, Text } from '@chakra-ui/react'

import { formatPrice } from 'src/features/product/stores/productSlice'

export default function OrderLineItem({
  name,
  id,
  price,
  image,
}: {
  name: string
  id: string
  price: number
  image: string
}) {
  return (
    <Flex justifyContent={'space-between'} w="full" alignItems={'center'}>
      <Flex>
        <Image src={image} w="100px" alt="image alt" mr={2} />
        <Flex direction={'column'} justifyContent={'center'}>
          <Text fontWeight={'semibold'}>{name}</Text>
          <Text fontWeight={'light'}>{id}</Text>
        </Flex>
      </Flex>
      <Text fontWeight={'semibold'}>{formatPrice(price)}</Text>
    </Flex>
  )
}
