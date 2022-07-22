import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    addOneCounter: (state, { payload }: PayloadAction<number>) => {
      state.counter = state.counter + payload;
    },
  },
});

export const { addOneCounter } = counterSlice.actions;
