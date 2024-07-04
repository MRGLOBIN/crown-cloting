import { combineReducers } from 'redux'

import { userReducer } from './user/user.reducer'
import { categoryReducer } from './categories/categories.reducer'
import { cartReducer } from './cart/cart.reducer'

export const rootReducer = combineReducers({
  categories: categoryReducer,
  user: userReducer,
  cart: cartReducer,
})
