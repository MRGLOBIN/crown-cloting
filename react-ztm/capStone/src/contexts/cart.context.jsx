import { createContext, useEffect } from 'react'
import { useState } from 'react'

// helper function for addItemToCart
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItem] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = productToAdd => {
    setCartItem(addCartItem(cartItems, productToAdd))
  }

  const value = { isCartOpen, setIsOpen, cartItems, addItemToCart, cartCount }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
