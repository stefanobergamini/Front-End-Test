import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    Title: "",
    Year:"",
    Plot: "",
    Actors: "",
    Awards:"",
    Poster: "",
    imdbRating: ""
  },
  reducers: {
    addMovie: (state, action) => {
      return action.payload
    },
  },
})

export const { addMovie } = movieSlice.actions

export default movieSlice.reducer