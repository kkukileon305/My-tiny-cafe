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
  },
});

export const { addItem } = cartList.actions;
