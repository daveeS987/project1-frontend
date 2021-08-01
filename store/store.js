import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import view from './viewSlice';
import activeCategory from './activeCategory';

const makeStore = () =>
  configureStore({
    reducer: {
      view,
      activeCategory,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
