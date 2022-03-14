import { Route, Routes, Navigate } from 'react-router-dom'

import Checkout from '../components/Checkout'
import { Confirmation } from './Confirmation'

export const CheckoutRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Checkout />} />
      <Route path="/confirm" element={<Confirmation />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
