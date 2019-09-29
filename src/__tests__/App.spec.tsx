import React from "react";
import Enzyme, { mount, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../components/App";

import * as api from "../service/api";

// コンポーネントをenzymeでマウントして振る舞いが想定している通りであることを確認する

jest.mock("../service/api");

const sleep = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
Enzyme.configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;

beforeAll(() => {
  // APIのみモック
  const mockedFirstdataFetch: jest.MockedFunction<
    typeof api.fetchFirstData
  > = api.fetchFirstData as any;
  const mockedSeconddataFetch: jest.MockedFunction<
    typeof api.fetchSecondData
  > = api.fetchSecondData as any;
  mockedFirstdataFetch.mockResolvedValue([
    { id: 1, text: "foo" },
    { id: 3, text: "bar" },
    { id: 5, text: "baz" }
  ]);
  mockedSeconddataFetch
    .mockResolvedValueOnce({
      id: 1,
      firstDataId: 1,
      text: "data of 1"
    })
    .mockResolvedValueOnce({
      id: 2,
      firstDataId: 3,
      text: "data of 3"
    })
    .mockResolvedValueOnce({
      id: 3,
      firstDataId: 5,
      text: "data of 5"
    });
});
beforeEach(() => {
  wrapper = mount(<App />);
});

const sel = (id: string) => `[data-test="${id}"]`;
// 画面表示時に実行されるdispatchの完了を適当な時間待って期待しているとおり描画されているのを確認する。
it("", async () => {
  await sleep(3000);
  const rerenderedWrapper = wrapper.update();
  const firstData1 = rerenderedWrapper.find(sel("first-data-1"));
  const firstData3 = rerenderedWrapper.find(sel("first-data-3"));
  const firstData5 = rerenderedWrapper.find(sel("first-data-5"));
  const secondData1 = rerenderedWrapper.find(sel("second-data-1"));
  const secondData2 = rerenderedWrapper.find(sel("second-data-2"));
  const secondData3 = rerenderedWrapper.find(sel("second-data-3"));
  expect(firstData1.text()).toEqual("id: 1 text: foo");
  expect(firstData3.text()).toEqual("id: 3 text: bar");
  expect(firstData5.text()).toEqual("id: 5 text: baz");
  expect(secondData1.text()).toEqual("data of 1");
  expect(secondData2.text()).toEqual("data of 3");
  expect(secondData3.text()).toEqual("data of 5");
});
