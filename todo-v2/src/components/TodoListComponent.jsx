import TodoItemComponent from "./TodoItemComponent";

const TodoListComponent = (props) => {
  const { todoList } = props;

  return (
    <>
      <div className="container">
        {todoList.map((todo) => (
          <TodoItemComponent key={todo.id} todoItem={todo} />
        ))}
      </div>
    </>
  );
};

export default TodoListComponent;
