// libs
import React from "react";
import classNames from "classnames";
import { ChevronRightIcon } from "@/libs/icons";
// others
import style from "./ContentInformation.module.scss";

type PROPS = {
  /* content */
  content: string;
  /* the background of the content */
  isLight?: boolean;
};

const ContentInformation = ({ content, isLight }: PROPS) => (
  <div className={classNames(style.wrapper, { [style.isLight]: isLight })}>
    {content}
    {isLight && <ChevronRightIcon className={style.chevronIcon} size={27} />}
  </div>
);

export default ContentInformation;
