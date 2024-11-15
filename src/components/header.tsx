import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import Logo from '../assets/Logo.svg'

export function Header() {
  return (
    <header className="bg-background flex justify-between px-40 py-8">
      <img src={Logo} alt="Coffee delivery" />
      <div className="flex gap-3">
        <div className="bg-purple-light text-purple-dark flex items-center rounded-lg p-2">
          <MapPin size={22} weight="fill" className="text-purple mr-1" />
          <span className="font-text text-sm">Porto Alegre, RS</span>
        </div>
        <div className="bg-yellow-light flex items-center rounded-lg p-2">
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
