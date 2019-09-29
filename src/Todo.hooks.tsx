import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./store";
import { useEffect, useState } from "react";
import {
  actions as todoActions,
  selectors as todoSelectors
} from "./store/todo";
import { actions as todoCommentActions } from "./store/todoComment";
const useTodo = () => {
  const todoIds = useSelector((state: AppState) => {
    return todoSelectors.getTodoIds(state.todoState);
  });
  const todoWithComments = useSelector((state: AppState) => {
    const todos = state.todoState.todos;
    const todoComments = state.todoCommentState.todoComments;
    return todos.map(todo => {
      return {
        ...todo,
        comments: todoComments.filter(todoComment => {
          return todoComment.todoId === todo.id;
        })
      };
    });
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoActions.addTodo("foo"));
    dispatch(todoActions.addTodo("bar"));
    dispatch(todoActions.addTodo("baz"));
  }, []);
  useEffect(() => {
    console.log(todoIds);
    todoIds.forEach(todoId => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          dispatch(
            todoCommentActions.addTodoComment({
              todoId: todoId,
              text: `coment ${todoId}-${i}`
            })
          );
        }, 100);
      }
    });
  }, [todoIds]);
  return { todoWithComments };
};
export default useTodo;
