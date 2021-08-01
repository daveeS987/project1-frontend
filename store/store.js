import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import view from './viewSlice.js';
import activeCategory from './activeCategory.js';
import sortProducts from './sortProductsSlice.js';

const makeStore = () =>
  configureStore({
    reducer: {
      view,
      activeCategory,
      sortProducts,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
