import { createStandardAction } from "typesafe-actions";

export const addTodo = createStandardAction("ADD_TODO")<string>();
