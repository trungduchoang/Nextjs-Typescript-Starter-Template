export * from "./http";
export * from "./next";
export * from "./events";

export interface ANY_OBJECT {
  [key: string]: any;
}

export type REDUX_ACTION = {
  type: string;
  payload: ANY_OBJECT;
};
