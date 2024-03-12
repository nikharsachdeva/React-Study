import TodoItemComponent from "./TodoItemComponent";

const TodoListComponent = (props) => {
  const { todoList, deleteHandler } = props;

  return (
    <>
      <div className="container">
        {todoList.map((todo) => (
          <TodoItemComponent
            deleteHandler={deleteHandler}
            key={todo.id}
            todoItem={todo}
          />
        ))}
      </div>
    </>
  );
};

export default TodoListComponent;
