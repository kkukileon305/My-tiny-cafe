import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counterSlice';
import { isTakeoutSlice } from './slices/isTakeoutSlice';

export const store = configureStore({
  reducer: {
    takeout: isTakeoutSlice.reducer,
    counter: counterSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
