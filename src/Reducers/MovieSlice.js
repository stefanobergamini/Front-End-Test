import { createSlice, current } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    Title: "",
    Year:"",
    Plot: "",
    Actors: "",
    Awards:"",
    Poster: "",
    Ratings: []
  },
  reducers: {
    addMovie: (state, action) => {
      console.log("before", current(state));
      return action.payload
    },
  },
})

export const { addMovie } = movieSlice.actions

export default movieSlice.reducer