// types
import { TYPES } from "@/redux/dispatchTypes";
import { REDUX_ACTION } from "@/types/common";

const initialState = {
  hotelInfo: {
    name: "happyHotel",
  },
  isLoading: false,
  isError: false,
  error: {},
};

export function specialHotelReducer(
  state = initialState,
  { type, payload = {} }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.EXAMPLE:
      return {
        ...state,
        hotelInfo: payload,
      };
    default:
      return state;
  }
}
