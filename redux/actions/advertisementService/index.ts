// types
import { TYPES } from "@/constants/actions/AssignRequest";
import { ASYNC_ACTION } from "@/types/common";
// others
import CONSTANTS from "@/constants";
import request from "@/utils/request";

export const fetchHotelInfo = ({
  data = {},
  cbSuccess,
}: ASYNC_ACTION = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.TASK + params.dataViewAssignRequest.id,
    method: "POST",
    cbSuccess,
    payload: data,
    LOADING_ACTION: TYPES.APPROVE_ASSIGN_REQUEST_LOADING,
    SUCCESS_ACTION: TYPES.APPROVE_ASSIGN_REQUEST_SUCCESS,
    ERROR_ACTION: TYPES.APPROVE_ASSIGN_REQUEST_ERROR,
  });
