import { types as firstDataTypes } from "../store/ducks/firstData";
import { types as secondDataTypes } from "../store/ducks/secondData";

export const fetchFirstData = () => {
  const resolveData: firstDataTypes.FirstData[] = [
    { id: 1, text: "foo" },
    { id: 2, text: "bar" },
    { id: 3, text: "baz" }
  ];
  return new Promise<firstDataTypes.FirstData[]>(resolve => {
    setTimeout(() => {
      resolve(resolveData);
    }, 1000);
  });
};

let id = 0;
export const fetchSecondData = (firstDataId: number, text: string) => {
  id++;
  return new Promise<secondDataTypes.SecondData>(resolve => {
    setTimeout(() => {
      resolve({ firstDataId: firstDataId, id: id, text: text });
    }, 1000);
  });
};
