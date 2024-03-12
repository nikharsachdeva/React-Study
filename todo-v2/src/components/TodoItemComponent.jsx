import style from "./TodoItemComponent.module.css";
const TodoItemComponent = (props) => {
  const { todoItem } = props;
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <span className={style["item-text-span"]}>{todoItem.title}</span>
          </div>

          <div className="col">
            <span className={style["item-date-span"]}>{todoItem.date}</span>
          </div>

          <div className="col">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItemComponent;
