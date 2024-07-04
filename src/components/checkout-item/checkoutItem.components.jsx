// import { useContext } from "react";

// import { CartContext } from "../../contexts/cart.context";

import { useDispatch, useSelector } from 'react-redux'
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from '../../store/cart/cart.action.js'

import { CheckoutItemContainer, ImageContainer } from './checkout.styles.jsx'
import { selectCartItems } from '../../store/cart/cart.selector.js'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  // const { clearItemFromCart, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext);
  const cartItems = useSelector(selectCartItems)

  const dispatch = useDispatch()

  const deleteItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      {/* TODO: button styles */}
      <div className='remove-button' onClick={deleteItemHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
