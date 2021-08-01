import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = { show: 'home' };

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    changeview(state, action) {
      // you can do something here
      state.show = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.view,
      };
    },
  },
});

const { actions, reducer } = viewSlice;
export const { changeview } = actions;
export default reducer;