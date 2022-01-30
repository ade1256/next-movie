import { configureStore } from '@reduxjs/toolkit';
import movieSliceReducer from './movieSlice'
import themeSliceReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    themes: themeSliceReducer,
    movies: movieSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch