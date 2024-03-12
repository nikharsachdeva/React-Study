import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoHeadingComponent from "./components/TodoHeadingComponent";
import TodoListComponent from "./components/TodoListComponent";
import { useState } from "react";
import TodoEmpty from "./components/TodoEmpty";

function App() {
  const [todoList, setTodoList] = useState([]);

  const onAddClicked = (title, date) => {
    if (title.length != 0 && date.length != 0) {
      const sno = todoList.length + 1;
      const item = {
        id: sno,
        title,
        date,
      };
      const latestList = [...todoList, item];
      setTodoList(latestList);
    } else {
      alert("Title and date are required");
    }
  };

  const onDeleteClicked = (id) => {
    const index = todoList.findIndex((item) => item.id === id);

    if (index !== -1) {
      // Filter out the item with the specified id
      const updatedList = todoList.filter((item) => item.id !== id);

      // Update the state with the filtered array
      setTodoList(updatedList);
    }
  };

  return (
    <>
      <TodoHeadingComponent addHandler={onAddClicked}></TodoHeadingComponent>
      <TodoListComponent deleteHandler={onDeleteClicked} todoList={todoList} />
      <TodoEmpty todoList={todoList}></TodoEmpty>
    </>
  );
}

export default App;
