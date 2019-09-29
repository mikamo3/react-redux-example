import * as actions from "./actions";
import { createReducer, ActionType } from "typesafe-actions";

export interface Todo {
  id: number;
  text: string;
}
export interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {
  todos: []
};
type TodoActions = ActionType<typeof actions>;
const reducer = createReducer<TodoState, TodoActions>(
  initialState
).handleAction(actions.addTodo, (state, action) => {
  return {
    todos: [
      ...state.todos,
      {
        id: state.todos.length + 1,
        text: action.payload
      }
    ]
  };
});
export default reducer;
