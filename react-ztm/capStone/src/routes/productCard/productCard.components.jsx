import Button from '../../components/button/button.component'

import './productCard.styles.scss'

const ProductCard = ({ product: { name, price, imageUrl } }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  )
}

export default ProductCard
