import { configureStore } from '@reduxjs/toolkit';
import { isTakeout } from './slices/isTakeout';
import { cartList } from './slices/cartList';

export const store = configureStore({
  reducer: {
    isTakeout: isTakeout.reducer,
    cartList: cartList.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;