// types
import TYPES from "@/redux/dispatchTypes";
import { REDUX_ACTION } from "@/types/common";

const initialState = {
  hotelInfo: {
    happy: "hotel",
  },
  isLoading: false,
  isError: false,
  error: {},
};

export function specialHotelReducer(
  state = initialState,
  { type, payload }: REDUX_ACTION
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
          key: data.key,
          id: data.id,
          name: data.hotelName,
          data: data.date,
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
