import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import Logo from '../assets/Logo.svg'

export function Header() {
  return (
    <header className="flex justify-between bg-background px-40 py-8">
      <img src={Logo} alt="Coffee delivery" />
      <div className="flex gap-3">
        <div className="flex items-center rounded-lg bg-purple-light p-2 text-purple-dark">
          <MapPin size={22} weight="fill" className="mr-1 text-purple" />
          <span className="font-text text-sm">Porto Alegre, RS</span>
        </div>
        <div className="flex items-center rounded-lg bg-yellow-light p-2">
          <button>
            <ShoppingCart
              weight="fill"
              size={22}
              className="text-yellow-dark"
            />
          </button>
        </div>
      </div>
    </header>
  )
}
