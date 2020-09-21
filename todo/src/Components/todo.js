import React from "react";

const Todo = (props) => {
  console.log("todo.js", props);
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.toggleTask(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
