// libs
import React from "react";
import classNames from "classnames";
// others
import style from "./Gallery.module.scss";

export const Gallery = ({
  children,
  className = "",
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => (
  <div className={classNames(style.wrapper, className)}>
    <div className={style.itemsContainer}>{children}</div>
  </div>
);
