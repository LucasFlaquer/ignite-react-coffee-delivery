import { createBrowserRouter } from 'react-router-dom'

import { BaseLayout } from './layouts/base-layout'
import { Home } from './pages/home'
import { Checkout } from './pages/home/checkout'

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
