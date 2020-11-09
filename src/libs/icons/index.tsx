// libs
import React from "react";
import classNames from "classnames";
// types
import { ONCLICK } from "@/types/common";
// paths
import * as paths from "./paths";

type PROPS = {
  /** Icon name */
  name: keyof typeof paths;
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
const Icon = ({
  size = 20,
  color = "#999999",
  className = "",
  name,
  onClick,
}: PROPS) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    style={{ height: size, fill: color }}
    className={classNames(className)}
    onClick={onClick}
  >
    <path d={paths[name]} />
  </svg>
);

export default Icon;
