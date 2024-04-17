import PRODUCTS from '../constants/shopData.json'

import { createContext, useState } from 'react'

export const ProductContext = createContext({
  products: [],
  setproducts: () => [],
})

export const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState(PRODUCTS)
  const value = { products, setproducts }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
