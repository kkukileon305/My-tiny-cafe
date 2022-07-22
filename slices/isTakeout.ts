import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

export const isTakeout = createSlice({
  name: 'takeout',
  initialState,
  reducers: {
    setTakeout: (_, { payload }: PayloadAction<boolean>) => {
      return payload;
    },
  },
});

export const { setTakeout } = isTakeout.actions;
