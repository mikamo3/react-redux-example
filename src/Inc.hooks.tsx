import { actions as incActions } from "./store/increment";
import { actions as incActionsAsync } from "./store/incrementAsync";
import { AppState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useIncrement = () => {
  const dispatch = useDispatch();
  const incNum = useSelector((state: AppState) => state.incrementState);
  const incAsyncNum = useSelector(
    (state: AppState) => state.incrementAsyncState
  );
  useEffect(() => {
    dispatch(incActions.increment());
  }, [dispatch]);
  useEffect(() => {
    dispatch(incActionsAsync.incrementAsync.request());
  }, [dispatch]);
  return { incNum, incAsyncNum };
};

export default useIncrement;
