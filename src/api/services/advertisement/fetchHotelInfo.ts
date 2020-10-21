// types
import TYPES from "@/redux/dispatchTypes";
import { ASYNC_ACTION } from "@/types/common";
// others
import { ENDPOINTS } from "@/api/endpoints";
import request from "@/utils/request";

export const fetchHotelInfo = ({ data = {}, cbSuccess }: ASYNC_ACTION = {}) =>
  request({
    url: ENDPOINTS.ADVERTISEMENT.FETCH_HOTEL_INFO,
    method: "GET",
    cbSuccess,
    data,
    LOADING_ACTION: TYPES.FETCH_HOTEL_INFO_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_HOTEL_INFO_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_HOTEL_INFO_ERROR,
  });
