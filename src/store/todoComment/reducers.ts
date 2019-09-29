import * as actions from "./actions";
import { createReducer, ActionType } from "typesafe-actions";

export interface TodoComment {
  todoId: number;
  text: string;
}
export interface TodoCommentState {
  todoComments: TodoComment[];
}
const initialState: TodoCommentState = {
  todoComments: []
};
type TodoCommentActions = ActionType<typeof actions>;
const reducer = createReducer<TodoCommentState, TodoCommentActions>(
  initialState
).handleAction(actions.addTodoComment, (state, action) => {
  return {
    todoComments: [
      ...state.todoComments,
      { todoId: action.payload.todoId, text: action.payload.text }
    ]
  };
});
export default reducer;
