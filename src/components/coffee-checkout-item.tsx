import { Minus, Plus, Trash } from '@phosphor-icons/react'

import { Coffee } from '../constants/coffees'
import { useCart } from '../context/cart-context'

interface Props {
  item: Coffee & { quantity: number }
}

export function CoffeeCheckoutItem({ item }: Props) {
  const { addToCart, removeFromCart, reduceItemQuantity } = useCart()

  function handleAdd() {
    addToCart({ ...item, quantity: 1 })
  }

  function handleRemove() {
    removeFromCart(item)
  }

  function handleReduceItemQuantity() {
    reduceItemQuantity(item)
  }

  return (
    <div className="mb-6 flex border-b border-base-button px-1 pb-8 pt-2">
      <div className="flex max-w-[255px] items-center gap-5">
        <img className="h-16 w-16" src={item.image} alt="coffee" />
        <div>
          <h3 className="mb-2 font-text text-base text-base-subtitle">
            {item.title}
          </h3>
          <div className="flex gap-2">
            <div className="flex justify-between gap-1 rounded-md bg-base-button p-2 font-text text-sm">
              <button className="" onClick={handleReduceItemQuantity}>
                <Minus
                  size={14}
                  className="text-purple hover:text-purple-dark"
                />
              </button>
              <span className="font-text text-base text-base-title">
                {item.quantity}
              </span>
              <button className="" onClick={handleAdd}>
                <Plus
                  size={14}
                  className="text-purple hover:text-purple-dark"
                />
              </button>
            </div>
            <button
              onClick={handleRemove}
              className="flex items-center gap-1 rounded-md bg-base-button px-2 text-xs uppercase text-base-text hover:bg-base-hover"
            >
              <Trash size={16} className="text-purple" /> remover
            </button>
          </div>
        </div>
      </div>
      <span className="ml-auto block text-base font-bold">R$ 9,90</span>
    </div>
  )
}
