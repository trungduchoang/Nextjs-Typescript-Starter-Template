// libs
import React from "react";
import classNames from "classnames";
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
    <p className={style.content}>{content}</p>
  </div>
);

export default ContentInformation;
