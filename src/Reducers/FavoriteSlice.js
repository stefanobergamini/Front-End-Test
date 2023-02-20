import { createSlice, current } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      console.log(current(state));
      let index = state.findIndex(el => el.imdbID === action.payload.imdbID);
      if(index === -1) 
        return [...state, action.payload]
      return state
    },
  },
})

export const { addFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer