import { Stripe } from '@stripe/stripe-js'
import { Product } from 'src/features/product'

export const createPaymentIntent = async (
  items: Product[]
): Promise<Stripe | null> => {
  const res = await fetch('/create-payment-intent', {
    method: 'POST',

    headers: { 'Content-Type': 'application/json' },

    body: JSON.stringify({ items: items }),
  })

  const data = res.json()
  return data
}
