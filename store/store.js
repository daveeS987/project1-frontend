import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

// import counter from './counterSlice';
import view from './viewSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      // counter,
      view,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
