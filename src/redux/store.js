// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './reviewsSlice';

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
});

export default store;
