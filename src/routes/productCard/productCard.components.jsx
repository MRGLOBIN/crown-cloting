// import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../components/button/button.component'

import { addItemToCart } from '../../store/cart/cart.action'

import { selectCartItems } from '../../store/cart/cart.selector'

import './productCard.styles.scss'
// import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product

  // const { addItemToCart } = useContext(CartContext)
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard
