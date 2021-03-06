import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload
    }
  }
});

export const { setTodo } = todoSlice.actions;

export default todoSlice.reducer;
