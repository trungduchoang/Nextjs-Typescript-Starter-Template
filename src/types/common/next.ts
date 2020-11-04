import { PAGES_REDUCER } from "@/configs/Redux";
import { PREPROCESSED_REQUEST_PAYLOAD } from "./http";

interface ANY_OBJECT {
  [key: string]: any;
}

export type REQUEST_ERROR_INFO = {
  status?: number;
  statusText?: string;
  data?: ANY_OBJECT;
  url?: string;
  baseURL?: string;
};

export type PAGE_PROPS = {
  page: PAGES_REDUCER;
  apiResponse: {
    data?: ANY_OBJECT;
    isError?: boolean;
    errorInfo?: REQUEST_ERROR_INFO | any;
    reqPayload?: PREPROCESSED_REQUEST_PAYLOAD;
  };
};

export type GET_STATIC_PROPS = {
  props: PAGE_PROPS;
};

export type IMAGE_PROPS = Omit<
JSX.IntrinsicElements["img"],
"src" | "srcSet" | "ref" | "width" | "height" | "loading"
> & {
  src: string;
  quality?: number | string;
  priority?: boolean;
  loading?: "lazy" | "eager" | undefined;
  unoptimized?: boolean;
} & (
  | {
    width: number;
    height: number;
    unsized?: false;
  }
  | {
    width?: number;
    height?: number;
    unsized: true;
  }
);
