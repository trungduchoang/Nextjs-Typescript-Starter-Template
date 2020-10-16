// types
import { TYPES } from "@/redux/actionTypes/advertisementService";
import { REDUX_ACTION } from "@/types/common";

const initialState = {
  hotelInfo: {},
  isLoading: false,
  isError: false,
  error: {},
};

export default function (
  state = initialState,
  { type, payload }: REDUX_ACTION
) {
  switch (type) {
    case TYPES.FETCH_HOTEL_INFO_SUCCESS:
      return {
        ...state,
        hotelInfo: payload.data,
        isLoading: false,
        isError: false,
        error: {},
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
        error: payload,
      };
    default:
      return state;
  }
}
