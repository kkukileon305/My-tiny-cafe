import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

export const isDark = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return !state;
    },
  },
});

export const { toggleTheme } = isDark.actions;
