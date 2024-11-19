import { createContext, ReactNode, useContext, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}

type CartItem = { itemId: string; quantity: number }

interface CardContextProps {
  addToCart: (item: CartItem) => void
  itemsInCart: number
}

export const CartContext = createContext({} as unknown as CardContextProps)

export function CartContextProvider({ children }: ProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(newItem: CartItem) {
    let newCart: CartItem[] = cart
    const item = cart.find((item) => item.itemId === newItem.itemId)
    if (!item) newCart = [...cart, newItem]
    else {
      newCart = cart.map((item) => {
        if (item.itemId === newItem.itemId) {
          return { ...item, quantity: item.quantity + newItem.quantity }
        }
        return item
      })
    }
    setCart(newCart)
  }

  const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
