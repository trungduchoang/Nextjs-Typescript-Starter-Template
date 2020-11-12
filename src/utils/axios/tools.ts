// libs
import { ValidationError } from "@/libs/ErrorHandler";
import { deepRename } from "@/libs/rename-nested-object";
// types
import {
  PREPROCESSED_REQUEST_PAYLOAD,
  AXIOS_CONFIG,
  RESPONSE_PREPROCESSOR,
} from "@/types/common";
import { AxiosResponse } from "axios";

/**
 * generateRequestPayload - Trigger request Preprocessor if it's existing
 * @param this - API Request config
 */
export function generateRequestPayload(
  this: AXIOS_CONFIG
): PREPROCESSED_REQUEST_PAYLOAD {
  const { payload = null, reqPreprocessor } = this;

  let reqPayload = {
    data: payload,
  };
  if (typeof reqPreprocessor === "function") {
    reqPayload = reqPreprocessor(payload);
  }

  return reqPayload;
}

/**
 * generateURL - Generate request url
 * @param this - API Request config
 * @param reqPayload - request payload data
 */
export function generateURL(
  this: AXIOS_CONFIG,
  reqPayload: PREPROCESSED_REQUEST_PAYLOAD
) {
  const { url } = this;

  let reqURL = "";
  if (typeof url === "string") reqURL = url;
  if (typeof url === "function") {
    reqURL = url(reqPayload);
  }

  return reqURL;
}

/**
 *
 * @param this - API response
 * @param schema
 * @param processStrategy - Handle API response more before return
 */
export function preprocessResponse(
  this: AxiosResponse,
  { schema, processStrategy }: RESPONSE_PREPROCESSOR
) {
  const response = this.data.results.hotel;
  if (!response) {
    throw new ValidationError(
      "Function preprocessResponse isn't working properly! After destructuring response is undefined!"
    );
  }
  const renamedData = deepRename({ input: response, schema });
  const preprocessedData =
    typeof processStrategy === "function"
      ? processStrategy(renamedData)
      : renamedData;

  return preprocessedData;
}
