import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
  name: 'fav',
  initialState: [],
  reducers: {
    setTheList: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTheList } = favSlice.actions;
export default favSlice.reducer;