// libs
import React from "react";
import classNames from "classnames";
// others
import style from "./Gallery.module.scss";

type PROPS = {
  /** children component */
  children: JSX.Element | JSX.Element[];
  /** className */
  className?: string;
};
/**
 * Gallery - Responsive Container for Card Graphic
 */
export const Gallery = ({ children, className = "" }: PROPS) => (
  <div className={classNames(style.wrapper, className)}>
    <div className={style.itemsContainer}>{children}</div>
  </div>
);
