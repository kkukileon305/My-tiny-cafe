import { configureStore } from '@reduxjs/toolkit';
import { isTakeout } from './slices/isTakeout';
import { cartList } from './slices/cartList';
import { isDark } from './slices/isDark';
import { curMenu } from './slices/curMenu';

export const store = configureStore({
  reducer: {
    isTakeout: isTakeout.reducer,
    cartList: cartList.reducer,
    isDark: isDark.reducer,
    curMenu: curMenu.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
