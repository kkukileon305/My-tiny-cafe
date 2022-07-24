import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const curMenu = createSlice({
  initialState: 0,
  name: 'menuIndex',
  reducers: {
    setCurMenu(_, { payload }: PayloadAction<number>) {
      return payload;
    },
  },
});

export const { setCurMenu } = curMenu.actions;
