import './checkout.styles.scss'

const CheckoutItem = ({ CartItem }) => {
  const { name, imageUrl, price, quantity } = CartItem

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
        <div>
          <span> p </span>
          <span>{quantity}</span>
          <span>S</span>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
