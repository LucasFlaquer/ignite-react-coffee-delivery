import './global.css'

import { RouterProvider } from 'react-router-dom'

import { CartContextProvider } from './context/cart-context'
import { router } from './routes'

export function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}
