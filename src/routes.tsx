import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from './layouts/base-layout'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/checkout', element: <Checkout /> },
    ],
  },
])
