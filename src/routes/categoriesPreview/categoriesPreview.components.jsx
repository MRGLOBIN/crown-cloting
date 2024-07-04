import { useSelector } from 'react-redux'

// import { CategoriesContext } from '../../contexts/categories.context'

import CategoryPreview from '../../components/categoryPreview/categoryPreview.components'
import Spinner from '../../components/spinner/spinner.component'

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/categories.selector'

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext)
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview key={title} products={products} title={title} />
          )
        })
      )}
    </>
  )
}

export default CategoriesPreview
