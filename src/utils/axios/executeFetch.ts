/* eslint-disable no-restricted-globals */
// libs
import { AxiosError, AxiosResponse } from "axios";
// types
import { AXIOS_CONFIG } from "@/types/common";
// others
import { AXIOS_INSTANCE } from "@/configs/Axios";
import {
  generateRequestPayload,
  generateURL,
  preprocessResponse,
} from "./tools";

export function executeFetch(this: AXIOS_CONFIG) {
  const {
    url,
    payload,
    reqPreprocessor,
    resPreprocessor: { schema, processStrategy },
    cbError,
    cbSuccess,
    ...nativeConfig
  } = this;
  const reqPayload = generateRequestPayload.call(this);
  const reqURL = generateURL.call(this, reqPayload);

  return AXIOS_INSTANCE({
    url: reqURL,
    data: reqPayload?.data,
    params: reqPayload?.searchParams,
    ...nativeConfig,
  })
    .then((response: AxiosResponse) => {
      const data = preprocessResponse.call(response, {
        schema,
        processStrategy,
      });

      if (cbSuccess) cbSuccess(data);

      return { data, isError: false };
    })
    .catch((err: AxiosError) => {
      if (cbError) cbError(err);

      return { isError: true, reqPayload };
    });
}
