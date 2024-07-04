// import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cartItem/cartItem.components'

import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
// import { CartContext } from "../../contexts/cart.context";

import { CartItems, CartDropDownContainer } from './cartDropdown.styles'

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems)

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      {/*
           TODO:
           button style
      */}
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}
export default CartDropdown
