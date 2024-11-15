import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { useState } from 'react'

import { Coffee } from '../constants/coffees'

interface Props {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: Props) {
  const [amount, setAmount] = useState(1)

  function handleAddToCart() {}
  function handleAdd() {
    setAmount((state) => state + 1)
  }
  function handleReduce() {
    if (amount === 0) return
    setAmount((state) => state - 1)
  }

  const coffeePriceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(coffee.price)
  return (
    <div className="flex flex-col items-center justify-center rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card pb-5 text-center">
      <img className="mx-auto mb-3 mt-[-20px] w-28" src={coffee.image} alt="" />
      <div className="space-x-2">
        {coffee.tags.map((tag) => (
          <span
            key={tag}
            className="text-xxs inline-block w-fit rounded-full bg-yellow-light px-2 py-1 font-text font-bold uppercase text-yellow-dark"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mb-2 mt-4 font-title text-xl font-bold text-base-subtitle">
        {coffee.title}
      </h3>
      <p className="mb-8 max-w-[216px] font-text text-sm text-base-label">
        {coffee.description}
      </p>
      <footer className="flex items-center justify-between">
        <span
          className="text-xxs font-text text-base-text"
          style={{ lineHeight: '130%' }}
        >
          R${' '}
          <span className="font-title text-2xl font-bold">
            {coffeePriceFormatted}
          </span>
        </span>
        <div className="ml-4 mr-2 flex justify-between gap-2 rounded-md bg-base-button p-2 font-text text-sm">
          <button className="p-1" onClick={handleReduce}>
            <Minus size={14} className="text-purple hover:text-purple-dark" />
          </button>
          <span className="font-text text-base text-base-title">{amount}</span>
          <button onClick={handleAdd}>
            <Plus size={14} className="text-purple hover:text-purple-dark" />
          </button>
        </div>
        <button
          className="rounded-md bg-purple-dark p-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="text-white" weight="fill" size={22} />
        </button>
      </footer>
    </div>
  )
}
