import { NavLink } from "react-router-dom";

const TodosFilter = ({ activeTodosCounter, completedTodosCounter, cleareCompletedTodos }) => {
  return (
    <>
      <span className="todo-count">{activeTodosCounter} items left</span>
      <ul className="filters">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "selected" : undefined)}>
            All
          </NavLink>
        </li>

        <li>
          <NavLink to="/active" className={({ isActive }) => (isActive ? "selected" : undefined)}>
            Active
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/completed"
            className={({ isActive }) => (isActive ? "selected" : undefined)}>
            Completed
          </NavLink>
        </li>
      </ul>

      {completedTodosCounter > 0 && (
        <button type="button" className="clear-completed" onClick={cleareCompletedTodos}>
          Clear completed
        </button>
      )}
    </>
  );
};

export default TodosFilter;
