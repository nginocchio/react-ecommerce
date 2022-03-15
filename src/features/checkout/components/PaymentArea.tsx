import { useEffect } from 'react'

import { Box } from '@chakra-ui/react'

import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from '@stripe/stripe-js'

import { Elements } from '@stripe/react-stripe-js'

import { Product } from '../../product/types'
import { useStore } from '../../../store/useStore'
import CheckoutForm from './CheckoutForm'
import createPaymentIntent from '../api/createPaymentIntent'

const stripePromise = loadStripe(
  'pk_test_51K5IwLLxHIUxOV4LYb9PrrmwfIYBiSj1CH5HrCyNph2KbIFwxhLu5PtcoNHanDHKmZ0ic3wYEWs0Imx4XPgeu0bZ00MlmzMi9h'
)

export default function PaymentArea({ orderItems }: { orderItems: Product[] }) {
  const clientSecret = useStore((state) => state.clientSecret)
  const setClientSecret = useStore((state) => state.setClientSecret)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    createPaymentIntent(orderItems).then((data) => setClientSecret(data))
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
