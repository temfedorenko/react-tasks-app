const TodosFilter = ({
  activeTodosCounter,
  completedTodosCounter,
  filter,
  onFilterSelect,
  cleareCompletedTodos,
}) => {
  return (
    <>
      <span className="todo-count">{activeTodosCounter} items left</span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === "all" ? "selected" : null}
            onClick={() => onFilterSelect("all")}>
            All
          </a>
        </li>

        <li>
          <a
            href="#/active"
            className={filter === "active" ? "selected" : null}
            onClick={() => onFilterSelect("active")}>
            Active
          </a>
        </li>

        <li>
          <a
            href="#/completed"
            className={filter === "completed" ? "selected" : null}
            onClick={() => onFilterSelect("completed")}>
            Completed
          </a>
        </li>
      </ul>

      {completedTodosCounter > 0 && (
        <button type="button" className="clear-completed" onClick={() => cleareCompletedTodos()}>
          Clear completed
        </button>
      )}
    </>
  );
};

export default TodosFilter;
