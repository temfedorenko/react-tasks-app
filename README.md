# React ToDo App (task from Mate.academy)

1. Implement `TodoApp` component with an input field to create new todos on submit (Enter). Each item should have:
   - `id` - unique identifier (`+new Date()` is good enough)
   - `title` - the text of a todo
   - `completed` - current status (`false` by default)
2. Show the number of not completed todos in `TodoApp`;
3. Implement `TodoList` component to display a list of todos;
   ```jsx harmony
   <TodoList items={todos} />
   ```
4. Implement `TodoItem` component with ability to toggle the `completed` status using a checkbox.
   - move a `li` tag inside the `TodoItem`;
   - add class `completed` if todo is completed;
5. Add the ability to toggle the completed status of all the todos with the `toggleAll` checkbox.
   - `toggleAll` checkbox is active only if all the todos are completed;
   - if you click the checkbox all the items should be marked as `completed`/`not completed` depending on `toggleAll` checked;
6. Create `TodosFilter` component to switch between `All`/`Active`/`Completed` todos (add it to the `App`)
