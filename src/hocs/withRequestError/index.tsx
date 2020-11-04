// libs
import React from "react";
// types
import { ANY_OBJECT, REQUEST_ERROR_INFO } from "@/types/common";
// others
import style from "./withRequestError.module.scss";

const withRequestError = ({
  isError,
  reqPayload,
  errorInfo: { status, statusText, url, baseURL, data } = {},
}: {
  isError?: boolean;
  reqPayload?: ANY_OBJECT;
  errorInfo?: REQUEST_ERROR_INFO;
}) => (component: JSX.Element) => {
  const isAPIError = !!status;
  if (isError && isAPIError) {
    console.error(`URL: ${baseURL}${url}`);
    console.error(`Request Payload: \n${JSON.stringify(reqPayload, null, 2)}`);
    return (
      <pre className={style.wrapper}>
        <h1>{`Error ${status} - ${statusText}`}</h1>
        <h4>{data?.message}</h4>
      </pre>
    );
  }

  return component;
};

export default withRequestError;
