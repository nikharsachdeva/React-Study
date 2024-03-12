import style from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayComponent from "./components/DisplayComponent";
import ButtonListComponent from "./components/ButtonListComponent";
import { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");

  const clickHandler = (event, btn) => {
    const input = btn;
    let latestExpression = null;

    if (btn === "C") {
      latestExpression = "";
      setExpression(latestExpression);
    } else if (btn === "=") {
      const result = eval(expression);
      setExpression(result);
    } else {
      latestExpression = expression + input;
      setExpression(latestExpression);
    }
  };

  const buttonsList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={style.rootContainer}>
      <DisplayComponent latestExpression={expression} />
      <ButtonListComponent
        buttonList={buttonsList}
        clickHandler={clickHandler}
      />
    </div>
  );
}

export default App;
