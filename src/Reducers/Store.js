import { configureStore } from '@reduxjs/toolkit'
import favorite from './FavoriteSlice'

export default configureStore({
  reducer: {
    favoriteReducer: favorite,
  },
})