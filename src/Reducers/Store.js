import { configureStore } from '@reduxjs/toolkit'
import movie from './MovieSlice'
import favorite from './FavoriteSlice'

export default configureStore({
  reducer: {
    movieReducer: movie,
    favoriteReducer: favorite,
  },
})