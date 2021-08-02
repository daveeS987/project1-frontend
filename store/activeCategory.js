import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: null,
};

export const activeCategorySlice = createSlice({
  name: 'activeCategory',
  initialState,
  reducers: {
    changeActiveCategory: (state, action) => {
      /*
    ** Acton Payload Needs to take this Form
    const newActiveCategory = {
      name,
      id,
      subCategory,
    };
    */

      state.active = action.payload;
    },
    changeCategoryNull: (state, action) => {
      state.active = null;
    },
  },
});

const { actions, reducer } = activeCategorySlice;
export const { changeActiveCategory, changeCategoryNull } = actions;
export default reducer;
