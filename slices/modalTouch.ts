import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const modalTouch = createSlice({
  name: 'modalTouch',
  initialState: false,
  reducers: {
    setModalTouch(_, { payload }: PayloadAction<boolean>) {
      return payload;
    },
  },
});

export const { setModalTouch } = modalTouch.actions;
