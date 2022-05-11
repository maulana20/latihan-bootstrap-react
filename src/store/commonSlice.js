import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  contact: {
    name: 'Maulana Saputra',
    email: 'maulana.saputra@ap.iij.com',
  }
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload
    }
  }
});

export const { setTitle } = commonSlice.actions;

export default commonSlice.reducer;
