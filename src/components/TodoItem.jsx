import { useState } from "react";

const TodoItem = ({ todo, onToggleTodoStatus, onDeleteTodo, updateTodo }) => {
  let classes = todo.completed ? "completed" : null;

  const [isEditible, setIsEditible] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.title);

  const handleInputChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditible(false);
      updateTodo(todo.id, todoTitle);
    }

    if (e.key === "Escape") {
      setTodoTitle(todo.title);
      setIsEditible(false);
    }
  };

  const handleInputBlur = (e) => {
    if (e.target.value.trim().length === 0) {
      onDeleteTodo(todo.id);
    } else {
      setTodoTitle(e.target.value);
      setIsEditible(false);
      updateTodo(todo.id, todoTitle);
    }
  };

  return (
    <li className={isEditible ? classes + " editing" : classes}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id="toggle-view"
          checked={todo.completed}
          onChange={() => onToggleTodoStatus(todo.id)}
        />

        <label
          onDoubleClick={() => {
            setIsEditible(true);
          }}>
          {todoTitle}
        </label>
        <button type="button" className="destroy" onClick={() => onDeleteTodo(todo.id)} />
      </div>
      <input
        type="text"
        ref={(input) => input?.focus()}
        className="edit"
        value={todoTitle}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onBlur={handleInputBlur}
      />
    </li>
  );
};

export default TodoItem;
