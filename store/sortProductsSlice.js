import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  by: 'Newest',
};

export const sortProductsSlice = createSlice({
  name: 'sortProducts',
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.by = action.payload;
    },
  },
});

const { actions, reducer } = sortProductsSlice;
export const { changeSort } = actions;
export default reducer;
