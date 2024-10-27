import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://dev-abt1u4l9bzxp4ml.api.raw-labs.com/customer-reviews';

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
    console.log("dddddddddddddddddddddddd");
  const response = await axios.get(API_URL);
  console.log("responseresponse",response);
  return response.data;
});

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewsSlice.reducer;
