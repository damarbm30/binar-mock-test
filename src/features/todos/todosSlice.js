import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  return response.data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.completed = !todo.completed;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
