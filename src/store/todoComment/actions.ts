import { createStandardAction } from "typesafe-actions";

export const addTodoComment = createStandardAction("ADD_TODO_COMMENT")<{
  todoId: number;
  text: string;
}>();
