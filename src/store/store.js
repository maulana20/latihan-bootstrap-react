import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './commonSlice';
import todoSlice from './todoSlice';

const rootReducer = {
  common: commonSlice,
  todo: todoSlice,
}

export const store = configureStore({
  reducer: rootReducer
});
