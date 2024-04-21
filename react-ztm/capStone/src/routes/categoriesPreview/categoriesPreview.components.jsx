import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'

import CategoryPreview from '../../components/categoryPreview/categoryPreview.components'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} products={products} title={title} />
      })}
    </>
  )
}

export default CategoriesPreview
