import { createSelector, Selector } from "reselect";
import { DataForView } from "./types";
import { types as firstDataType } from "../firstData";
import { types as secondDataType } from "../secondData";
import { AppState } from "../../store";
const getFirstData: Selector<AppState, firstDataType.FirstData[]> = state => {
  return state.firstDataState.data;
};

const getSecondData: Selector<AppState, secondDataType.SecondData[]> = state =>
  state.secondDataState.data;

export const getDataForView = createSelector(
  [getFirstData, getSecondData],
  (firstData, secondData): DataForView[] => {
    return firstData.map(fData => {
      return {
        id: fData.id,
        text: fData.text,
        secondData: secondData.filter(sData => sData.firstDataId === fData.id)
      };
    });
  }
);
