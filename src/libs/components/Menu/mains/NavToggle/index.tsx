// libs
import React from "react";
import Icon from "@/libs/icons";
// types
import { ONCLICK } from "@/types/common";
// others
import style from "./NavToggle.module.scss";

const NavToggle = ({ onClick }: { onClick: ONCLICK }) => (
  <Icon
    className={style.toggleBtn}
    name="Menu"
    color="#666666"
    size={25}
    onClick={onClick}
  />
);

export default NavToggle;
