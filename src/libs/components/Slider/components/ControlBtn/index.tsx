// libs
import React from "react";
import classNames from "classnames";
// others
import style from "./ControlBtn.module.scss";

type PROPS = {
  /** onClick */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** position of this button */
  position: "left" | "right";
};
/**
 * ControlBtn
 */
const ControlBtn = ({ onClick, position }: PROPS) => (
  <div
    className={classNames(style.wrapper, style[position])}
    onClick={onClick}
  />
);

export default ControlBtn;
