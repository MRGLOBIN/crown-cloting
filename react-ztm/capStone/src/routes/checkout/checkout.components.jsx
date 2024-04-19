import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkoutItem.components'

const Checkout = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  )
}

export default Checkout
