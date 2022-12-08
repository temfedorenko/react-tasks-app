import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, onDeleteTodo, updateTodo }) => {
  const onToggleTodoStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const todoItems = todos?.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggleTodoStatus={onToggleTodoStatus}
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
