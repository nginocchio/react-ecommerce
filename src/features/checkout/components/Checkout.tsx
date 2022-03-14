import {
  Box,
  HStack,
  VStack,
  Text,
  Flex,
  Image,
  Container,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from '@stripe/stripe-js'

import { Elements } from '@stripe/react-stripe-js'

import { formatPrice } from '../../product/stores/productSlice'
import { Product } from '../../product/types'
import { useStore } from '../../../store/useStore'
import CheckoutForm from './CheckoutForm'

type ITotals = {
  subTotal: number
  total: number
  taxes: number
  shipping: number
}

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
          <OrderItems orderItems={cartItems} />
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

const stripePromise = loadStripe(
  'pk_test_51K5IwLLxHIUxOV4LYb9PrrmwfIYBiSj1CH5HrCyNph2KbIFwxhLu5PtcoNHanDHKmZ0ic3wYEWs0Imx4XPgeu0bZ00MlmzMi9h'
)

function PaymentArea({ orderItems }: { orderItems: Product[] }) {
  const [clientSecret, setClientSecret] = useState(undefined)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    fetch('/create-payment-intent', {
      method: 'POST',

      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({ items: [{ id: 'shampoo' }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret)
        setClientSecret(data.clientSecret)
      })
  }, [])

  const appearance: Appearance = {
    theme: 'stripe',
  }

  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  }

  return (
    <Box w="full">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </Box>
  )
}

function OrderItems({ orderItems }: { orderItems: Product[] }) {
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

function OrderLineItem({
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

function Totals({ subTotal, total, shipping, taxes }: ITotals) {
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
