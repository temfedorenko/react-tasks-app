import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  const onToggleTodoStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const todoItems = todos?.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onToggleTodoStatus={onToggleTodoStatus} />
  ));

  return (
    <>
      <ul className="todo-list">
        {todoItems}
        {/* <li className="completed">
          <div className="view">
            <input type="checkbox" className="toggle" id="toggle-completed" />
            <label htmlFor="toggle-completed">qwertyuio</label>
            <button type="button" className="destroy" data-cy="deleteTodo" />
          </div>
          <input type="text" className="edit" />
        </li> */}

        {/* <li className="editing">
          <div className="view">
            <input type="checkbox" className="toggle" id="toggle-editing" />
            <label htmlFor="toggle-editing">zxcvbnm</label>
            <button type="button" className="destroy" data-cy="deleteTodo" />
          </div>
          <input type="text" className="edit" />
        </li> */}

        {/* <li>
          <div className="view">
            <input type="checkbox" className="toggle" id="toggle-view2" />
            <label htmlFor="toggle-view2">1234567890</label>
            <button type="button" className="destroy" data-cy="deleteTodo" />
          </div>
          <input type="text" className="edit" />
        </li> */}
      </ul>
    </>
  );
};

export default TodoList;
