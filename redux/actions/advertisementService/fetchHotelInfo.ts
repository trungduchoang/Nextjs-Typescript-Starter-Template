// types
import { TYPES } from "@/redux/actionTypes/advertisementService";
import { ASYNC_ACTION } from "@/types/common";
// others
import CONSTANTS from "@/constants";
import request from "@/utils/request";

export const fetchHotelInfo = ({ data = {}, cbSuccess }: ASYNC_ACTION = {}) =>
  request({
    url: CONSTANTS.ENDPOINT.FETCH_HOTEL_INFO,
    method: "POST",
    cbSuccess,
    data,
    LOADING_ACTION: TYPES.FETCH_HOTEL_INFO_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_HOTEL_INFO_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_HOTEL_INFO_ERROR,
  });
