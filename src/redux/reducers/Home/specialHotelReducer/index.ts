// types
import { SERVICE_TYPES } from "@/redux/types/services";
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
  switch (type) {
    case SERVICE_TYPES.FETCH_HOTEL_INFO_SUCCESS:
      return {
        ...state,
        hotelInfo: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case SERVICE_TYPES.FETCH_HOTEL_INFO_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case SERVICE_TYPES.FETCH_HOTEL_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload,
      };
    default:
      return state;
  }
}
