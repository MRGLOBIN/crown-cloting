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

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id == productToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== productToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter(item => item.id !== productToClear.id)

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItem] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setcartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )

    setcartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = productToAdd => {
    setCartItem(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = productToRemove => {
    setCartItem(removeCartItem(cartItems, productToRemove))
  }

  const clearItemFromCart = productToClear => {
    setCartItem(clearCartItem(cartItems, productToClear))
  }

  const value = {
    isCartOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
