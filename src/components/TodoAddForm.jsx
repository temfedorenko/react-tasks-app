import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoAddForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!todoTitle) {
      return;
    }

    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      completed: false,
    };

    addTodo(newTodo);
    setTodoTitle("");
  }
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoAddForm;
