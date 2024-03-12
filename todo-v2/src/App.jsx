import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHeadingComponent from "./components/TodoHeadingComponent";
import TodoListComponent from "./components/TodoListComponent";
import { useState } from "react";
import TodoEmpty from "./components/TodoEmpty";

function App() {
  const [todoList, setTodoList] = useState([]);

  const onAddClicked = () => {};

  return (
    <>
      <TodoHeadingComponent />
      <TodoListComponent todoList={todoList} />
      <TodoEmpty todoList={todoList}></TodoEmpty>
    </>
  );
}

export default App;
