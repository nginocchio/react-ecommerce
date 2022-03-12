import { useRoutes } from 'react-router-dom'

import Home from '../components/Home'
import Checkout from '../features/checkout/components/Checkout'
import { ProductRoutes } from '../features/product'
import { CartRoute } from '../features/cart'

export const AppRoutes = () => {
  const allRoutes = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/cart',
      element: <CartRoute />,
    },
    {
      path: '/checkout',
      element: <Checkout />,
    },
    {
      path: '/products/*',
      element: <ProductRoutes />,
    },
  ]

  const element = useRoutes(allRoutes)

  return <>{element}</>
}
