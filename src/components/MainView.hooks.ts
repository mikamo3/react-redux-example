import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as firstData from "../store/ducks/firstData";
import * as secondData from "../store/ducks/secondData";
import * as dataCombine from "../store/ducks/dataCombine";
import { AppState } from "../store/store";
const useData = () => {
  const dispatch = useDispatch();
  const firstDataIds = useSelector((state: AppState) =>
    firstData.selectors.getAllId(state.firstDataState)
  );

  const dataForView = useSelector((state: AppState) => {
    return dataCombine.selectors.getDataForView(state);
  });
  useEffect(() => {
    dispatch(firstData.operations.fetchFirstDataRequest());
  }, [dispatch]);
  useEffect(() => {
    console.log(firstDataIds);
    firstDataIds.forEach(id => {
      dispatch(
        secondData.operations.fetchFirstDataRequest({
          id,
          text: `data of ${id}`
        })
      );
    });
  }, [firstDataIds, dispatch]);
  return dataForView;
};
export default useData;
