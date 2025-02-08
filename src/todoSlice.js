import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { items: [], loading: false, error: null },
  reducers: {
    fetchTodosRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoRequest: (state, action) => {
      state.loading = true;
    },
    addTodoSuccess: (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    },
    deleteTodoRequest: (state, action) => {
      state.loading = true;
    },
    deleteTodoSuccess: (state, action) => {
      state.loading = false;
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoRequest: (state, action) => {
      state.loading = true;
    },
    toggleTodoSuccess: (state, action) => {
      state.loading = false;
      state.items = state.items.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
    editTodoRequest: (state, action) => {
      state.loading = true;
    },
    editTodoSuccess: (state, action) => {
      state.loading = false;
      state.items = state.items.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
    clearTodosRequest: (state) => {
      state.loading = true;
    },
    clearTodosSuccess: (state) => {
      state.loading = false;
      state.items = [];
    },
  },
});

export const {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoRequest,
  deleteTodoSuccess,
  toggleTodoRequest,
  toggleTodoSuccess,
  editTodoRequest,
  editTodoSuccess,
  clearTodosRequest,
  clearTodosSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;

