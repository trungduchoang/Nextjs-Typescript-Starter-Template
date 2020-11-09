// libs
import React from "react";
import Icon from "@/libs/icons";
// types
import { ONCLICK } from "@/types/common";
// others
import style from "./NavToggle.module.scss";

type PROPS = {
  /** onClick event */
  onClick: ONCLICK;
};
/**
 * NavToggle
 */
const NavToggle = ({ onClick }: PROPS) => (
  <Icon
    className={style.toggleBtn}
    name="Menu"
    color="#666666"
    size={25}
    onClick={onClick}
  />
);

export default NavToggle;
