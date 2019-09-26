import { createStandardAction } from "typesafe-actions";
export const increment = createStandardAction("INCREMENT")<undefined>();
export const decrement = createStandardAction("DECREMENT")<undefined>();
