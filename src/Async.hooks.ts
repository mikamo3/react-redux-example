import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store";
import { selectors as todoCommentsSelector } from "./store/todoComment";
import { selectors as todoSelector } from "./store/todo";
import {
  actions as asyncSomethingAction,
  selectors as asyncSomethingSelector
} from "./store/asyncSomething";
import { useEffect } from "react";

const useAsync = () => {
  const dispatch = useDispatch();
  const todosComments = useSelector((state: AppState) =>
    todoCommentsSelector.getAll(state.todoCommentState)
  );
  const todoComment = useSelector((state: AppState) =>
    todoSelector.getTodoIds(state.todoState)
  );

  const asyncData = useSelector((state: AppState) =>
    asyncSomethingSelector.getAll(state.asyncSometingState)
  );
  useEffect(() => {
    console.log(todoComment);
    todoComment.forEach(comment => {
      dispatch(asyncSomethingAction.asyncSomething.request(`${comment}`));
    });
  }, [todoComment]);
  return asyncData;
};

export default useAsync;
