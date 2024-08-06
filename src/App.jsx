import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDone, filterUndone, filterAll } from "./Redux/todoSlice";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

const App = () => {
  const { todos, filter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [upTask, setUpTask] = useState("");

  let doneTodos = todos.filter((el) => el.isDone === true);
  let undoneTodos = todos.filter((el) => el.isDone === false);

  return (
    <div>
      <AddTodo />
      <div>
        <button
          onClick={() => {
            dispatch(filterAll());
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            dispatch(filterDone());
          }}
        >
          Done
        </button>
        <button
          onClick={() => {
            dispatch(filterUndone());
          }}
        >
          Undone
        </button>
      </div>

      <TodoList
        todos={
          filter === "Done"
            ? doneTodos
            : filter === "UnDone"
            ? undoneTodos
            : todos
        }
      />
    </div>
  );
};

export default App;
