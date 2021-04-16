import React, { useReducer } from "react";
import "./App.css";
import TodoForm from "./Components/todoform";
import TodoList from "./Components/todolist";
import {
  ADD_TASK,
  CLEAR_TASK,
  TOGGLE_TASK,
  initialState,
  todoReducer,
} from "./reducer/todoreducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);
  // const [todoList, setTodoList] = useState([
  //   {
  //     task: "Wash Dishes",
  //     id: 0,
  //     completed: false,
  //   },
  //   {
  //     task: "Do Laundry",
  //     id: 1,
  //     completed: false,
  //   },
  // ]);

  const toggleTask = (id) => {
    dispatch({ type: TOGGLE_TASK, payload: id });
    // setTodoList({
    //   todoList: todoList.map((task) => {
    //     if (task.id === taskId)
    //       return {
    //         ...task,
    //         completed: !task.completed,
    //       };
    //     return task;
    //   }),
    // });
  };

  const clearTask = () => {
    dispatch({ type: CLEAR_TASK });
    // setTodoList({
    //   todoList: todoList.filter((task) => {
    //     return !task.completed;
    //   }),
    // });
  };

  const addTask = (taskName) => {
    const newTask = { task: taskName, id: Date.now(), completed: false };
    dispatch({ type: ADD_TASK, payload: newTask });
    // setTodoList({
    //   todoList: [
    //     ...todoList,
    //     { task: taskName, id: Date.now(), completed: false },
    //   ],
    // });
  };
  return (
    <div>
      <h2>Today's Tasks</h2>
      <TodoForm addTask={addTask} />
      <TodoList todo={state} toggleTask={toggleTask} clearTask={clearTask} />
    </div>
  );
}

export default App;
