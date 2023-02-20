import { configureStore } from '@reduxjs/toolkit'
import movie from './MovieSlice'

export default configureStore({
  reducer: {
    movieReducer: movie
  },
})