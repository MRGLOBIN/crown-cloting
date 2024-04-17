import { useContext } from 'react'
import { ProductContext } from '../../contexts/products.context'
import ProductCard from '../productCard/productCard.components'

import './shop.styles.scss'

const Shop = () => {
  const { products } = useContext(ProductContext)
  return (
    <div className="product-container">
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}

export default Shop
