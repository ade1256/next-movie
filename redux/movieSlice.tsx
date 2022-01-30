import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  status: 'loading',
  data: []
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMoviesData: (state, action) => {
      state.data = action.payload
      state.status = 'finished'
    }
  }
})
export const { setMoviesData } = movieSlice.actions;

export const listMovies = state => state.movies.data

export default movieSlice.reducer;