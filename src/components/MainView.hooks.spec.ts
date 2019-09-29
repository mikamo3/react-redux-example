import { renderHook } from "@testing-library/react-hooks";
import useData from "./MainView.hooks";
import { useSelector, useDispatch } from "react-redux";
import { object } from "prop-types";
jest.mock("react-redux");
it("", () => {
  const mockedUseSelector: jest.MockedFunction<
    typeof useSelector
  > = useSelector as any;
  const mockedUseDispath: jest.MockedFunction<any> = useDispatch as any;
  const mockedDispatch = jest.fn();

  // dispatch(actionPayload)が実行されたとき、actionをパラメータにmockを実行する
  mockedUseDispath.mockReturnValue((action: any) => {
    mockedDispatch(action);
  });
  // 初回(firstDataのidの配列取得時)は空配列、2回目(dataForView)は適当な配列を返却する
  mockedUseSelector
    .mockImplementationOnce(() => [])
    .mockImplementationOnce(() => [1, 2, 3]);

  const rendered = renderHook(() => useData());
  // useDataの返却結果を確認
  expect(rendered.result.current).toEqual([1, 2, 3]);
  // mockの実行結果を確認
  //初回起動のuseEffectにて1回実行されていることを確認
  expect(mockedDispatch).toHaveBeenCalledTimes(1);
  expect(mockedDispatch.mock.calls[0][0]).toMatchObject({
    type: "FETCH_FIRSTDATA_REQUEST",
    payload: undefined
  });

  // firstDataIdsの配列の要素が存在するときに
  // useEffectにて
  // 要素の件数文payloadに正しい値が設定された状態で
  // FETCH_SECONDDATA_REQUESTがdispatchされることを確認する
  mockedUseSelector
    .mockImplementationOnce(() => [4, 5, 6])
    .mockImplementationOnce(() => [7, 8, 9]);
  rendered.rerender();
  console.log(rendered.result.current);
  console.log(mockedUseDispath.mock.calls);
  console.log(mockedUseSelector.mock.calls);
  console.log(mockedDispatch.mock.calls);
  expect(mockedDispatch).toHaveBeenCalledTimes(4)
  expect(rendered.result.current).toEqual([7, 8, 9]);
  expect(mockedDispatch.mock.calls[0][0]).toMatchObject({
    type: "FETCH_FIRSTDATA_REQUEST",
    payload: undefined
  });
  expect(mockedDispatch.mock.calls[1][0]).toMatchObject({
    type: "FETCH_SECONDDATA_REQUEST",
    payload: { id: 4, text: "data of 4" }
  });
  expect(mockedDispatch.mock.calls[2][0]).toMatchObject({
    type: "FETCH_SECONDDATA_REQUEST",
    payload: { id: 5, text: "data of 5" }
  });
  expect(mockedDispatch.mock.calls[3][0]).toMatchObject({
    type: "FETCH_SECONDDATA_REQUEST",
    payload: { id: 6, text: "data of 6" }
  });
});
