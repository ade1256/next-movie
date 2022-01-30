import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  status: 'loading',
  data: {
    lang: 'en'
  }
}

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    setDataLang: (state, action) => {
      state.data.lang = action.payload
      state.status = 'finished'
    }
  }
})
export const { setDataLang } = themeSlice.actions;

export const getLang = state => state.themes.data.lang

export default themeSlice.reducer;