import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (thunkAPI) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_NEXT_API}/api/v1/products`
    );
    return response.data;
  }
);

const initialState = {
  entities: {},
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initProducts(state, action) {
      state.entities = action.payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.products,
      };
    },
    [getProducts.fulfilled]: (state, action) => {
      state.entities = action.payload.results.reduce((acc, cur) => {
        const id = cur._id.toString();
        delete cur._id;
        cur.id = id;
        acc[id] = cur;
        return acc;
      }, {});
    },
  },
});

const { actions, reducer } = productSlice;
export const { initProducts } = actions;
export default reducer;
