import { HStack, Flex, Container } from '@chakra-ui/react'

import { useStore } from '../../../store/useStore'
import OrderLineItems from './OrderLineItems'
import Totals from './Totals'
import PaymentArea from './PaymentArea'

export default function Checkout() {
  const cartItems = useStore((state) => state.cartItems)
  const total = useStore((state) => state.total)
  const taxes = useStore((state) => state.taxes)
  const shipping = useStore((state) => state.shipping)
  const subTotal = total + taxes + shipping

  return (
    <Container maxW={'container.lg'} py={10}>
      <Flex h="100vh">
        <HStack w="full" h="full" alignItems={'flex-start'}>
          <PaymentArea orderItems={cartItems} />
          <OrderLineItems orderItems={cartItems} />
          <Totals
            shipping={shipping}
            taxes={taxes}
            total={total}
            subTotal={subTotal}
          />
        </HStack>
      </Flex>
    </Container>
  )
}
