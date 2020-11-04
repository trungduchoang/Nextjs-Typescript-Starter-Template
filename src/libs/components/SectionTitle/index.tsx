// libs
import React from "react";
import classNames from "classnames";
// others
import style from "./SectionTitle.module.scss";

export const SectionTitle = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => (
  <div className={classNames(style.wrapper, className)}>
    <h1 className={style.title}>{title}</h1>
  </div>
);
