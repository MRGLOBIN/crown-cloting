// export const selectCategoriesMap = state => state.categories.categoriesArray

import { createSelector } from 'reselect'

const selectCategoriesReducer = store => store.categories

const selectCategoriesArray = createSelector(
  [selectCategoriesReducer],
  categoriesSlice => categoriesSlice.categoriesArray
)

export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  categories =>
    categories.reduce((accumalator, category) => {
      const { title, items } = category
      accumalator[title.toLowerCase()] = items

      return accumalator
    }, {})
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  categoriesSlice => categoriesSlice.isLoading
)
