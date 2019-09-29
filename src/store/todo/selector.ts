import { createSelector, Selector } from "reselect";
import { TodoState, Todo } from "./reducers";

const todoSelector: Selector<TodoState, Todo[]> = state => state.todos;
const getTodoIds = createSelector(
  [todoSelector],
  todos => {
    console.log(todos);
    return todos.map(todo => todo.id);
  }
);
export { getTodoIds };
