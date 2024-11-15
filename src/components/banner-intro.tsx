import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import BannerImage from '../assets/banner-image.png'
import { IntroItem } from './intro-item'

export function BannerIntro() {
  return (
    <div className="bg-hero-pattern gap-50 flex items-center justify-between bg-cover bg-center px-40 py-10">
      <div className="w-full flex-1">
        <div className="w-[588px]">
          <h1 className="font-title mb-4 text-5xl font-extrabold">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-base-subtitle font-text mb-16 text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="grid grid-cols-[231px_294px] gap-5">
          <IntroItem text="Compra simples e segura">
            <div className="bg-yellow-dark rounded-full p-2">
              <ShoppingCart size={16} weight="fill" className="text-white" />
            </div>
          </IntroItem>
          <IntroItem text="Embalagem mantém o café intacto">
            <div className="bg-base-text rounded-full p-2">
              <Package size={16} weight="fill" className="text-white" />
            </div>
          </IntroItem>
          <IntroItem text="Entrega rápida e rastreada">
            <div className="bg-yellow rounded-full p-2">
              <Timer size={16} weight="fill" className="text-white" />
            </div>
          </IntroItem>
          <IntroItem text="O café chega fresquinho até você">
            <div className="bg-purple rounded-full p-2">
              <Coffee size={16} weight="fill" className="text-white" />
            </div>
          </IntroItem>
        </div>
      </div>
      <img src={BannerImage} alt="banner image" />
    </div>
  )
}
