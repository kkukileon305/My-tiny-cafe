import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isChange: false,
  isMessage: false,
};

export const message = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setIsChange(state, { payload }: PayloadAction<boolean>) {
      state.isChange = payload;
    },
    setIsMessage(state, { payload }: PayloadAction<boolean>) {
      state.isMessage = payload;
    },
  },
});

export const { setIsChange, setIsMessage } = message.actions;
