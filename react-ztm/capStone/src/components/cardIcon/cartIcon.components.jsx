import { useContext } from 'react'
import shoppingBag from '../../assets/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context'

import './cartIcon.styles.scss'

const CartIcon = () => {
  const { isCartOpen, setIsOpen } = useContext(CartContext)

  const toggleisCartOpen = () => {
    setIsOpen(!isCartOpen)
  }

  return (
    <div className='cart-icon-container' onClick={toggleisCartOpen}>
      <img src={shoppingBag} alt='CartIcon' className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon