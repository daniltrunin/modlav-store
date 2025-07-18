import {configureStore} from '@reduxjs/toolkit'
import categoriesReducer from '../features/CategoriesList/CategoriesListSlice.js'
import favoritesReducer from '../features/Header/HeaderSlice.js'
import contentReducer from '../features/Content/ContentSlice.js'

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        favorites: favoritesReducer,
        content: contentReducer,
    },
})
