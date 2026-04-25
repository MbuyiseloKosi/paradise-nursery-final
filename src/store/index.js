// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // This must match the file name exactly

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});