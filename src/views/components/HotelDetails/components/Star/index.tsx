// libs
import React from "react";
import classNames from "classnames";
// components
// others
import style from "./Star.module.scss";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div className={style.wrapper}>
    <div
      className={classNames(style.star, {
        [style.selected]: selected,
      })}
      onClick={onClick}
    />
  </div>
);

export default Star;
