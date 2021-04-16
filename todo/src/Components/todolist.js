import React from "react";
import Todo from "./todo";

const TodoList = (props) => {
  console.log("todolist.js", props);
  return (
    <div>
      {props.todo.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTask={props.toggleTask} />
      ))}
      <button onClick={props.clearTask}>Clear Task</button>
    </div>
  );
};

export default TodoList;
