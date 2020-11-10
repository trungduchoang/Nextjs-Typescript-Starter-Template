// libs
import { combineReducers } from "redux";
// reducers
import { pageData } from "./pageData";
import { specialHotelReducer } from "./specialHotelReducer";

export const Home = combineReducers({
  pageData,
  specialHotelReducer,
});
