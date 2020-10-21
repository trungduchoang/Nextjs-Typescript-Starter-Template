// libs
import { AxiosRequestConfig } from "axios";

export type ROUTES = Array<{
  pageName: string;
  path: string;
  pages: string;
}>;

export interface ENV_INFO {
  [env: string]: { BASE_URL: string };
}

export interface REDUX_ACTION {
  type: string;
  payload: any;
}

export interface ASYNC_REQUEST {
  data?: { [key: string]: any };
  params?: { [key: string]: any };
  cbSuccess?: (...args: Array<any>) => any;
  cbError?: (url: string, error: any) => any;
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

export interface REQUEST_TYPE {
  url: string;
  method: HTTP_METHOD;
  data?: { [key: string]: any };
  params?: { [key: string]: any };
  cbSuccess?: (...args: Array<any>) => any;
  cbError?: (url: string, error: any) => any;
  LOADING_ACTION: string;
  SUCCESS_ACTION: string;
  ERROR_ACTION: string;
}

export interface AXIOS_CONFIG extends AxiosRequestConfig {
  method: HTTP_METHOD;
}
