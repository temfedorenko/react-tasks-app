const TodoItem = ({ todo, onToggleTodoStatus, onDeleteTodo }) => {
  return (
    <li className={todo.completed ? "completed" : null}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id="toggle-view"
          checked={todo.completed}
          onChange={() => onToggleTodoStatus(todo.id)}
        />
        <label
          htmlFor="toggle-view"
          onClick={(e) => {
            e.preventDefault();
          }}>
          {todo.title}
        </label>
        <button type="button" className="destroy" onClick={() => onDeleteTodo(todo.id)} />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

export default TodoItem;
