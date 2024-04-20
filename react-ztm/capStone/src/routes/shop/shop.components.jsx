import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../productCard/productCard.components'

import './shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='product-container'>
            {categoriesMap[title].map(product => {
              return <ProductCard key={product.id} product={product} />
            })}
          </div>
        </Fragment>
      ))}
    </>
  )
}

export default Shop
