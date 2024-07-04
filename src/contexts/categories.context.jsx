// import SHOP_DATA from '../constants/shopData.js'

import { createContext, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase.utils.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoryMap()
  }, [])

  const value = { categoriesMap, setCategoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
