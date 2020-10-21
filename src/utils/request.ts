// types
import { REQUEST_TYPE } from "@/types/common";
// others
import { AXIOS_INSTANCE } from "@/configs/enviroments";

const requireParam = (msg: string) => {
  throw Error(msg);
};

const request = ({
  url = requireParam("Url is undefined"),
  method = "POST",
  data,
  params,
  cbSuccess,
  cbError,
  LOADING_ACTION,
  SUCCESS_ACTION,
  ERROR_ACTION,
}: REQUEST_TYPE) => (dispatch) => {
  dispatch({
    type: LOADING_ACTION,
  });
  return AXIOS_INSTANCE.request({
    url,
    method,
    data,
    params,
  })
    .then((res: { [key: string]: any }) => {
      dispatch({
        type: SUCCESS_ACTION,
        payload: res,
      });
      if (cbSuccess) {
        cbSuccess({
          data: res,
        });
      }
    })
    .catch((error: { [key: string]: any }) => {
      dispatch({
        type: ERROR_ACTION,
        payload: { error },
      });
      if (cbError) cbError(url, error);
    });
};

export default request;
