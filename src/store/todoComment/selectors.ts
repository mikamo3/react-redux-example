import { createSelector, Selector } from "reselect";
import { TodoCommentState, TodoComment } from "./reducers";
const todoCommentSelector: Selector<TodoCommentState, TodoComment[]> = state =>
  state.todoComments;

export const getAll = createSelector(
  [todoCommentSelector],
  todocomments => todocomments
);
