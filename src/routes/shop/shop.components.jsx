import { Routes, Route } from 'react-router-dom'

import Category from '../category/category.components'
import CategoriesPreview from '../categoriesPreview/categoriesPreview.components'

import './shop.styles.scss'

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
