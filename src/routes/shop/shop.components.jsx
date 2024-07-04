import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Category from '../category/category.components'
import CategoriesPreview from '../categoriesPreview/categoriesPreview.components'
import { fetchCategoriesAsync } from '../../store/categories/categories.action'

import './shop.styles.scss'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop
