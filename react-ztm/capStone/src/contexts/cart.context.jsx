import { createContext } from 'react'
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
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItem] = useState([])

  const addItemToCart = productToAdd => {
    setCartItem(addCartItem(cartItems, productToAdd))
  }

  const value = { isCartOpen, setIsOpen, cartItems, addItemToCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
