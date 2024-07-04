import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductCard from '../productCard/productCard.components'
import Spinner from '../../components/spinner/spinner.component'
// import { CategoriesContext } from '../../contexts/categories.context'

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector'

import './category.styles.scss'

const Category = () => {
  const { category } = useParams()

  // const { categoriesMap } = useContext(CategoriesContext)
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <div className='category-container'>
          {products &&
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  )
}

export default Category
