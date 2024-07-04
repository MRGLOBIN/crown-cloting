import { useContext } from 'react'
import shoppingBag from '../../assets/shopping-bag.svg'

// import { CartContext } from "../../contexts/cart.context";

import {
  CartIconImg,
  CartItemCount,
  CartIconContainer,
} from './cartIcon.styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartIcon = () => {
  // const { isCartOpen, setIsOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)

  const toggleisCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  return (
    <CartIconContainer onClick={toggleisCartOpen}>
      <CartIconImg src={shoppingBag} alt='CartIcon' className='shopping-icon' />
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
