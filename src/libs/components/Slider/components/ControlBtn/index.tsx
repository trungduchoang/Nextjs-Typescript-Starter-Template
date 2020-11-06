// libs
import React from "react";
import classNames from "classnames";
// others
import style from "./ControlBtn.module.scss";

const ControlBtn = ({
  onClick,
  type = "left",
}: {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  type?: "left" | "right";
}) => <div className={classNames(style.wrapper, type)} onClick={onClick} />;

export default ControlBtn;
