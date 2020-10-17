// types
import { SERVICE_TYPES } from "@/redux/actionTypes/services";
import { ASYNC_ACTION } from "@/types/common";
// others
import { ENDPOINTS } from "@/redux/endpoints";
import request from "@/utils/request";

export const fetchHotelInfo = ({ data = {}, cbSuccess }: ASYNC_ACTION = {}) =>
  request({
    url: ENDPOINTS.ADVERTISEMENT.FETCH_HOTEL_INFO,
    method: "POST",
    cbSuccess,
    data,
    LOADING_ACTION: SERVICE_TYPES.FETCH_HOTEL_INFO_LOADING,
    SUCCESS_ACTION: SERVICE_TYPES.FETCH_HOTEL_INFO_SUCCESS,
    ERROR_ACTION: SERVICE_TYPES.FETCH_HOTEL_INFO_ERROR,
  });
