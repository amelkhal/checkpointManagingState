import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../Redux/todoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: uuidv4(),
    task: "",
    isEdited: false,
    isDone: false,
  });
  const changeHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo({ ...todo, task: "" });
  };
  return (
    <div style={{ marginBottom: "60px" }}>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          name="task"
          onChange={changeHandler}
          value={todo.task}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddTodo;
