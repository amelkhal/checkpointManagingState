import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTask,
  updateTodo,
  isDoneTodo,
} from "../Redux/todoSlice";

const Todo = ({ todoInfo }) => {
  const dispatch = useDispatch();

  const [upTask, setUpTask] = useState("");
  return (
    <div>
      {todoInfo.isEdited ? (
        <input
          type="text"
          defaultValue={todoInfo.task}
          onChange={(e) => {
            setUpTask(e.target.value);
          }}
        />
      ) : (
        <p style={{ color: todoInfo.isDone ? "green" : "red" }}>
          {todoInfo.task}
        </p>
      )}

      {todoInfo.isEdited ? (
        <button
          onClick={() => {
            dispatch(updateTodo({ id: todoInfo.id, task: upTask }));
            dispatch(editTask(todoInfo.id));
          }}
        >
          Save changes
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(editTask(todoInfo.id));
          }}
        >
          Edit
        </button>
      )}
      <button
        onClick={() => {
          dispatch(deleteTodo(todoInfo.id));
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          dispatch(isDoneTodo(todoInfo.id));
        }}
      >
        {todoInfo.isDone ? "Undone" : "Done"}
      </button>
    </div>
  );
};

export default Todo;
