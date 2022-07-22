import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isTakeout: false,
};

export const isTakeoutSlice = createSlice({
  name: 'isTakeout',
  initialState,
  reducers: {
    setTakeoutTrue: (state) => {
      state.isTakeout = true;
    },
    setTakeoutFalse: (state) => {
      state.isTakeout = false;
    },
    setTakeoutInverse: (state) => {
      state.isTakeout = !state.isTakeout;
    },
  },
});

export const { setTakeoutTrue, setTakeoutFalse, setTakeoutInverse } = isTakeoutSlice.actions;
