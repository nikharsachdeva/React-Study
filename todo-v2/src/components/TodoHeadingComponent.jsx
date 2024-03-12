import { useState } from "react";

const TodoHeadingComponent = ({ addHandler }) => {
  const getDefaultDate = () => {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = String(todayDate.getMonth() + 1).padStart(2, "0");
    const day = String(todayDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [currentTodo, setCurrentTodo] = useState("");

  const [currentDate, setCurrentDate] = useState(getDefaultDate());

  const todoChanged = (event) => {
    setCurrentTodo(event.target.value);
  };

  const dateChanged = (event) => {
    setCurrentDate(event.target.value);
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Todo Maker App</h1>
      <div className="row align-items-center">
        <div className="col">
          <div className="form-group">
            <label htmlFor="todoTextArea" className="form-label">
              Enter your todo here
            </label>
            <textarea
              className="form-control"
              id="todoTextArea"
              rows="4"
              style={{ width: "100%" }}
              value={currentTodo}
              onChange={(event) => todoChanged(event)}
            ></textarea>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <div className="form-group">
              <label htmlFor="todoDate" className="form-label">
                Due Date
              </label>
              <input
                type="date"
                className="form-control"
                id="todoDate"
                value={currentDate}
                onChange={(event) => dateChanged(event)}
              />
            </div>
          </div>

          <div className="row">
            <button
              onClick={() => addHandler(currentTodo, currentDate)}
              type="button"
              className="btn btn-primary mt-4"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoHeadingComponent;
