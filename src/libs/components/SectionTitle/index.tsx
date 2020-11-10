// libs
import React from "react";
import classNames from "classnames";
// others
import style from "./SectionTitle.module.scss";

type PROPS = {
  /** title */
  title: string;
  /** className */
  className?: string;
};
/**
 * SectionTitle
 */
export const SectionTitle = ({ title, className = "" }: PROPS) => (
  <div className={classNames(style.wrapper, className)}>
    <h1 className={style.title}>{title}</h1>
  </div>
);
