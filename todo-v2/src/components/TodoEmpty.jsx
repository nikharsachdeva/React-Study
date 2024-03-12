import style from "./TodoEmpty.module.css";

const TodoEmpty = ({ todoList }) => {
  return (
    <div>
      <h2
        id="emptyView"
        className={`${style.emptyView} ${
          todoList.length === 0 ? style.unhide : style.hide
        }`}
      >
        No pending tasks , enjoy
      </h2>
    </div>
  );
};

export default TodoEmpty;
