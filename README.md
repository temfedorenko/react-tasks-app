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
6. Create `TodosFilter` component to switch between `All`/`Active`/`Completed` todos (add it to the `App`);
7. Filter links should update the URL (`/`, `/active` or `/completed`)
   - correct filter should be applied after page reload;
   - use `HashRouter`;
8. Add ability to remove a todo using the `destroy` button (`X`).
9. Add ability to clear completed todos - remove all completed items from the list. The button should contain text `Clear completed` in it.
   - It should be visible if there is at least 1 completed item in the list.
10. Hide everything except the input to add new todo if there are no todos. But not if todos are just filtered out.
11. Make inline editing for the TODO item
    - double click on the TODO title makes it editable (just add a class `editing` to a `li`)
    - DON'T add `htmlFor` to the label!!!
    - `Enter` saves changes
    - `Ecs` cancels editing
    - Todo title can't be empty! If a user presses `Enter` when the title is empty, this todo should be removed.
    - (\*) save changes `onBlur`
12. Save state of the APP to the `localStorage` using the name `todos` for the key
