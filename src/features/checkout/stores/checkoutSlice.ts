import { loadStripe, Stripe } from '@stripe/stripe-js'
import { MyState } from 'src/store/useStore'
import { SetState } from 'zustand'

const STRIPE_PK =
  'pk_test_51K5IwLLxHIUxOV4LYb9PrrmwfIYBiSj1CH5HrCyNph2KbIFwxhLu5PtcoNHanDHKmZ0ic3wYEWs0Imx4XPgeu0bZ00MlmzMi9h'

export interface CheckoutSlice {
  stripePromise: Promise<Stripe | null>
  clientSecret?: string
  setClientSecret: (secret: string) => void
}

export const createCheckoutSlice = (set: SetState<MyState>): CheckoutSlice => ({
  stripePromise: loadStripe(STRIPE_PK),
  clientSecret: undefined,
  setClientSecret: (secret: string) => {
    set({ clientSecret: secret })
  },
})
