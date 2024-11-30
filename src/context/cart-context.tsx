import { createContext, ReactNode, useContext, useState } from 'react'

import { Coffee } from '../constants/coffees'

interface ProviderProps {
  children: ReactNode
}

type CartItem = Coffee & { quantity: number }

interface CardContextProps {
  addToCart: (item: CartItem) => void
  removeFromCart: (item: CartItem) => void
  reduceItemQuantity: (item: CartItem) => void
  itemsInCart: number
  cart: CartItem[]
  subtotal: number
}

export const CartContext = createContext({} as unknown as CardContextProps)

export function CartContextProvider({ children }: ProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(newItem: CartItem) {
    let newCart: CartItem[] = cart
    const item = cart.find((item) => item.id === newItem.id)
    if (!item) newCart = [...cart, newItem]
    else {
      newCart = cart.map((item) => {
        if (item.id === newItem.id) {
          return { ...item, quantity: item.quantity + newItem.quantity }
        }
        return item
      })
    }
    setCart(newCart)
  }

  function reduceItemQuantity(itemToReduce: CartItem) {
    const newCart = cart.map((item) => {
      if (itemToReduce.id !== item.id) return item

      return { ...itemToReduce, quantity: item.quantity - 1 }
    })
    setCart(newCart)
  }

  function removeFromCart(itemToRemove: CartItem) {
    const newCart = cart.filter((item) => item.id !== itemToRemove.id)
    setCart(newCart)
  }

  const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addToCart,
        removeFromCart,
        reduceItemQuantity,
        cart,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
