import style from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GroceryListComponent from "./components/GroceryListComponent";
import BaseContainer from "./components/BaseContainer";
import InputComponent from "./components/InputComponent";
import { useState } from "react";

function App() {
  const [listOfItems, setListOfItems] = useState([]);

  const handleDeleteClicked = (value) => {
    const index = listOfItems.indexOf(value);
    if (index !== -1) {
      const newList = [...listOfItems];
      newList.splice(index, 1);
      setListOfItems(newList);
    }
  };

  const handleEntrySubmit = (event) => {
    if (event.key === "Enter") {
      const newEntry = event.target.value;
      if (newEntry != "" && !listOfItems.includes(newEntry)) {
        const newList = [...listOfItems, newEntry];
        setListOfItems(newList);
        event.target.value = "";
      }
    }
  };

  return (
    <center>
      <BaseContainer>
        <span className={style.heading}> Let's Manage Your Work</span>
        <InputComponent submitHandler={handleEntrySubmit}></InputComponent>

        <GroceryListComponent
          listOfGrocery={listOfItems}
          deleteHandler={handleDeleteClicked}
        ></GroceryListComponent>
      </BaseContainer>
    </center>
  );
}

export default App;
