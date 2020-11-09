import { PAGES_REDUCER } from "@/configs/Redux";
import { PREPROCESSED_REQUEST_PAYLOAD } from "./http";

interface ANY_OBJECT {
  [key: string]: any;
}

export type PAGE_PROPS = {
  page: PAGES_REDUCER;
  apiResponse: {
    data?: ANY_OBJECT;
    isError?: boolean;
    reqPayload?: PREPROCESSED_REQUEST_PAYLOAD;
  };
};

export type GET_STATIC_PROPS = {
  props: PAGE_PROPS;
};

type LoadingValue = "lazy" | "eager" | undefined;
type LayoutValue = "fill" | "fixed" | "intrinsic" | "responsive" | undefined;

export type IMAGE_PROPS = Omit<
JSX.IntrinsicElements["img"],
"src" | "srcSet" | "ref" | "width" | "height" | "loading"
> & {
  src: string;
  quality?: number;
  priority?: boolean;
  loading?: LoadingValue;
  unoptimized?: boolean;
} & (
  | {
    width?: never;
    height?: never;
    unsized: true;
  }
  | {
    width?: never;
    height?: never;
    layout: "fill";
  }
  | {
    width: number;
    height: number;
    layout?: Exclude<LayoutValue, "fill">;
  }
);
