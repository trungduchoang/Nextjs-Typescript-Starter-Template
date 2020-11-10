// libs
import React from "react";
import classNames from "classnames";
// components
// others
import style from "./TitleDescription.module.scss";

type PROPS = {
  /** type of title */
  isBackground?: boolean;
};

const TitleDescription = ({ isBackground }: PROPS) => (
  <div
    className={classNames(style.wrapper, {
      [style.isBackground]: isBackground,
    })}
  >
    <h2>自そ符</h2>
  </div>
);

export default TitleDescription;
