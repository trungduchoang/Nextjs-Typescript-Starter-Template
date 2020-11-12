// libs
import React from "react";
// types
import { ANY_OBJECT } from "@/types/common";
// others
import style from "./withRequestError.module.scss";

type PROPS = {
  /** isError */
  isError?: boolean;
  /** request Payload */
  reqPayload?: ANY_OBJECT;
};
/**
 * withRequestError - ERROR Boundary Component
 */
const withRequestError = ({ isError, reqPayload }: PROPS) => (
  component: JSX.Element
) => {
  if (isError) {
    return (
      <pre className={style.wrapper}>
        <h1>Error</h1>
        <div>${JSON.stringify(reqPayload, null, 2)}</div>
      </pre>
    );
  }

  return component;
};

export default withRequestError;
