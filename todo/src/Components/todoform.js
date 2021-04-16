import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducer/todoreducer";

const TodoForm = (props) => {
  const [newTodo, setNewtodo] = useState({
    todo: "",
  });

  const handleChanges = (e) => {
    setNewtodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(newTodo);
    setNewtodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={newTodo.todo}
        onChange={handleChanges}
        placeholder="Add Task"
      />
      <button onClick={props.addTodo}>Add Task</button>
    </form>
  );
};

export default TodoForm;
