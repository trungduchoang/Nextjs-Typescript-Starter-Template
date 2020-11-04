export * from "./http";
export * from "./next";

export interface ANY_OBJECT {
  [key: string]: any;
}

export type REDUX_ACTION = {
  type: string;
  payload: ANY_OBJECT;
};
