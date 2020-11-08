// libs
import React from "react";
import classNames from "classnames";
// others
import style from "./TabHeadItem.module.scss";
import { ONCLICK } from "@/types/common";

type PROPS = {
  /** Tab's name/label */
  name: string;
  /** isActive */
  isActive: boolean;
  /** onClick */
  onClick: ONCLICK;
};
/**
 * TabHeadItem
 */
export const TabHeadItem = ({ name, isActive, onClick }: PROPS) => (
  <div
    className={classNames(style.wrapper, { [style.isActive]: isActive })}
    onClick={onClick}
  >
    <h2>{name}</h2>
  </div>
);
