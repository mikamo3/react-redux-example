export interface SecondData {
  id: number;
  text: string;
}
export interface DataForView {
  id: number;
  text: string;
  secondData: SecondData[];
}
