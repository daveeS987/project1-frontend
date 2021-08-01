import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

// import counter from './counterSlice';
import view from './viewSlice';
import activeCategory from './activeCategory';

const makeStore = () =>
  configureStore({
    reducer: {
      // counter,
      view,
      activeCategory,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
