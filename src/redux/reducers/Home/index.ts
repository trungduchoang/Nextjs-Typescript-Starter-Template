// libs
import { combineReducers } from "redux";
// reducers
import { pageProps } from "./pageProps";
import { specialHotelReducer } from "./specialHotelReducer";

export const Home = combineReducers({
  pageProps,
  specialHotelReducer,
});
