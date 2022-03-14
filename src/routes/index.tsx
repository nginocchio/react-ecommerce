import { useRoutes } from 'react-router-dom'

import Home from '../components/Home'
import { CheckoutRoutes } from '../features/checkout'
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
      element: <CheckoutRoutes />,
    },
    {
      path: '/products/*',
      element: <ProductRoutes />,
    },
  ]

  const element = useRoutes(allRoutes)

  return <>{element}</>
}
