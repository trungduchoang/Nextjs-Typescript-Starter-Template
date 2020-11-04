// libs
import { combineReducers } from "redux";
// reducers
import * as reducers from "@/redux/reducers";

const mainReducers = { ...reducers };
const rootReducer = combineReducers(mainReducers);

export default rootReducer;
export type ROOT_STATE = ReturnType<typeof rootReducer>;
export type PAGES_REDUCER = keyof ROOT_STATE;
