// libs
import React from "react";
import classNames from "classnames";
// types
import { ONCLICK } from "@/types/common";

type PROPS = {
  /** color of Icon, default = #999999 */
  color?: string;
  /** size of icon - default = 20px */
  size?: number;
  /** className */
  className?: string;
  /** onClick */
  onClick?: ONCLICK;
};
/**
 * Icon
 */
const Icon = (pathData: string) => ({
  size = 20,
  color = "#999999",
  className = "",
  onClick,
}: PROPS) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: size, fill: color }}
    className={classNames(className)}
    onClick={onClick}
  >
    <path d={pathData} />
  </svg>
);

export default Icon;
