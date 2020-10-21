// types
import TYPES from "@/redux/dispatchTypes";
import { REDUX_ACTION } from "@/types/common";

const initialState = {
  hotelInfo: {
    data: [],
  },
  isLoading: false,
  isError: false,
  error: {},
};

export function specialHotelReducer(
  state = initialState,
  { type, payload = {} }: REDUX_ACTION
) {
  const { data = {}, error } = payload;
  switch (type) {
    case TYPES.FETCH_HOTEL_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        error: {},
        hotelInfo: {
          data: data.all.slice(0, 2),
        },
      };
    case TYPES.FETCH_HOTEL_INFO_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_HOTEL_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error,
      };
    default:
      return state;
  }
}
