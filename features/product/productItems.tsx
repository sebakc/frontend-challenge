import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../../app/store';
import IProduct from '../../interfaces/Product'

// here we are typing the types for the state
export type ProductsData = {
  data: IProduct[];
  pending: boolean;
  error: boolean;
  page: number
};

const initialState: ProductsData = {
  data: [],
  pending: false,
  error: false,
  page: 1
};

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${initialState.page}&per_page=12`);

  return response.data;
});

export const productItems = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getProducts.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectProducts = (state: RootState) => state.products;

export default productItems.reducer;