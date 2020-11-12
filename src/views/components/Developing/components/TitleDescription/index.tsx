// libs
import React from "react";
import classNames from "classnames";
// components
// others
import style from "./TitleDescription.module.scss";

type PROPS = {
  /** type of title */
  isBackground?: boolean;
  /** title */
  title?: string;
};
/**
 * TitleDescription
 */
const TitleDescription = ({ title, isBackground }: PROPS) => (
  <div
    className={classNames(style.wrapper, {
      [style.isBackground]: isBackground,
    })}
  >
    <h2 className={style.title}>{title}</h2>
  </div>
);

export default TitleDescription;
