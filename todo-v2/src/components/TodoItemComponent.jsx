import style from "./TodoItemComponent.module.css";
import { MdDeleteForever } from "react-icons/md";

const TodoItemComponent = (props) => {
  const { todoItem, deleteHandler } = props;
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
            <button
              onClick={() => deleteHandler(todoItem.id)}
              type="button"
              className="btn btn-danger"
            >
              Delete <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItemComponent;
