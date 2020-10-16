// libs
import { combineReducers } from "redux";
// reducers
import * as reducers from "@/redux/reducers";

const typedReducers = { ...reducers };

const mainReducers = Object.keys(reducers).reduce(
  (accReducers, reducerKey) => ({
    ...accReducers,
    [reducerKey]: combineReducers(typedReducers[reducerKey]),
  }),
  {}
);

const rootReducer = combineReducers(mainReducers);

export default rootReducer;
