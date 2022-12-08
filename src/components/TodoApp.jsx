import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import TodosFilter from "./TodosFilter";

const TodoApp = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

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
    setTodos([...todos, newTodo]);
    setTodoTitle("");
  }

  const activeTodosCounter = todos?.filter((todo) => todo.completed === false).length;

  const onToggleAllTodosStatus = () => {
    if (!activeTodosCounter) {
      setTodos(
        todos.map((todo) => ({
          ...todo,
          completed: false,
        }))
      );
    } else {
      setTodos(
        todos.map((todo) => ({
          ...todo,
          completed: true,
        }))
      );
    }
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const filterTodos = (filter) => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => todo.completed === false);
      case "completed":
        return todos.filter((todo) => todo.completed === true);
      default:
        return todos;
    }
  };

  const onDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const visibleTodos = filterTodos(filter);

  return (
    <>
      <header className="header">
        <h1>todos</h1>

        <form onSubmit={(e) => handleFormSubmit(e)}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </form>
      </header>

      <section className="main">
        {visibleTodos.length > 0 && (
          <>
            <input
              type="checkbox"
              id="toggle-all"
              className="toggle-all"
              checked={!activeTodosCounter}
              onChange={() => onToggleAllTodosStatus()}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
          </>
        )}

        <TodoList todos={visibleTodos} setTodos={setTodos} onDeleteTodo={onDeleteTodo} />
      </section>

      {todos.length > 0 && (
        <footer className="footer">
          <TodosFilter
            activeTodosCounter={activeTodosCounter}
            filter={filter}
            onFilterSelect={onFilterSelect}
          />
        </footer>
      )}
    </>
  );
};

export default TodoApp;
