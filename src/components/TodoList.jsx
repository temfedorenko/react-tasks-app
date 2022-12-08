import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleTodoStatus, onDeleteTodo, updateTodo }) => {
  const todoItems = todos?.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggleTodoStatus={() => onToggleTodoStatus(todo.id)}
      onDeleteTodo={onDeleteTodo}
      updateTodo={updateTodo}
    />
  ));

  return (
    <>
      <ul className="todo-list">{todoItems}</ul>
    </>
  );
};

export default TodoList;
