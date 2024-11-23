import { Outlet } from 'react-router-dom'

import { Header } from '../components/header'

export function BaseLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
    </div>
  )
}
