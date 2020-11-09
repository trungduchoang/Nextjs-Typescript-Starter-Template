import { AxiosError, AxiosRequestConfig } from "axios";

interface ANY_OBJECT {
  [key: string]: any;
}

export type HTTP_METHOD =
  | "POST"
  | "GET"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "PUT"
  | "LINK"
  | "UNLINK"
  | undefined;

export type RESPONSE_PREPROCESSOR = {
  schema: ANY_OBJECT;
  processStrategy?: (renamedData: ANY_OBJECT) => ANY_OBJECT;
};

export type CALLBACK_SUCCESS = (data: ANY_OBJECT) => void;
export type CALLBACK_ERROR = (error: AxiosError) => void;

export type PREPROCESSED_REQUEST_PAYLOAD = {
  data: ANY_OBJECT | null;
  searchParams?: ANY_OBJECT | null;
  others?: ANY_OBJECT;
};

export type API_REQUEST<PAYLOAD> = {
  payload?: PAYLOAD;
  cbSuccess?: CALLBACK_SUCCESS;
  cbError?: CALLBACK_ERROR;
  resPreprocessor?: RESPONSE_PREPROCESSOR;
  reqPreprocessor?: (props: any) => PREPROCESSED_REQUEST_PAYLOAD;
};

export type AXIOS_CONFIG = {
  /** request url - string / callback */
  url: string | ((payload: PREPROCESSED_REQUEST_PAYLOAD) => string);
  /** http method */
  method: HTTP_METHOD;
  /** request payload */
  payload?: ANY_OBJECT;
  /** callback on success */
  cbSuccess?: CALLBACK_SUCCESS;
  /** callback on error */
  cbError?: CALLBACK_ERROR;
  /** preprocess API response */
  resPreprocessor: RESPONSE_PREPROCESSOR;
  /** preprocess API request payload */
  reqPreprocessor?: (props: any) => PREPROCESSED_REQUEST_PAYLOAD;
} & Omit<AxiosRequestConfig, "url">;
