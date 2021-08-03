import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  active: 'Settings',
};

export const accountViewSlice = createSlice({
  name: 'accountView',
  initialState,
  reducers: {
    changeAccountView: (state, action) => {
      state.active = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.accountView,
      };
    },
  },
});

const { actions, reducer } = accountViewSlice;
export const { changeAccountView } = actions;
export default reducer;
