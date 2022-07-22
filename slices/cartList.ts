import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PickedItem } from '../type';

const initialState: PickedItem[] = [];

export const cartList = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<PickedItem>) {
      state.push(payload);
    },
    removeItem(state, { payload }: PayloadAction<number>) {
      return state.filter((_, i) => payload !== i);
    },
    removeItemAll(state) {
      return [];
    },
  },
});

export const { addItem, removeItem, removeItemAll } = cartList.actions;
