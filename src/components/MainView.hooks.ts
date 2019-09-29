import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as firstData from "../store/ducks/firstData";
import * as secondData from "../store/ducks/secondData";
import * as dataCombine from "../store/ducks/dataCombine";
import { AppState } from "../store/store";

/*
  API_Aにリクエストした結果をもとに
  API_Bにリクエストを送り
  それぞれの結果を保持しているstateから
  画面描画に必要なものに整形して返す
  みたいな処理
*/

const useData = () => {
  const dispatch = useDispatch();
  const firstDataIds = useSelector((state: AppState) =>
    firstData.selectors.getAllId(state.firstDataState)
  );

  const dataForView = useSelector((state: AppState) => {
    return dataCombine.selectors.getDataForView(state);
  });
  useEffect(() => {
    console.log("hoge:");
    dispatch(firstData.operations.fetchFirstDataRequest());
  }, [dispatch]);
  useEffect(() => {
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
