import { configureStore } from '@reduxjs/toolkit';
import favReducer from './slices/fav';

export default configureStore({
  reducer: {
    fav: favReducer,
  },
});