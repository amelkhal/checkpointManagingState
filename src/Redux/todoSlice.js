import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: uuidv4(), task: "Learn ReactJS", isEdited: false, isDone: false },
    ],
    filter: "All",
  },
  reducers: {
    editTask: (state, action) => {
      state.todos.map((el) =>
        el.id == action.payload ? (el.isEdited = !el.isEdited) : el.isEdited
      );
    },
    updateTodo: (state, action) => {
      state.todos.map((el) =>
        el.id == action.payload.id ? (el.task = action.payload.task) : el.task
      );
    },
    isDoneTodo: (state, action) => {
      state.todos.map((el) =>
        el.id == action.payload ? (el.isDone = !el.isDone) : el.isDone
      );
    },

    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id != action.payload);
    },

    filterDone: (state) => {
      state.filter = "Done";
    },
    filterUndone: (state) => {
      state.filter = "UnDone";
    },
    filterAll: (state) => {
      state.filter = "All";
    },
  },
});

export default todoSlice.reducer;

export const {
  editTask,
  addTodo,
  deleteTodo,
  updateTodo,
  isDoneTodo,
  filterDone,
  filterUndone,
  filterAll,
} = todoSlice.actions;
