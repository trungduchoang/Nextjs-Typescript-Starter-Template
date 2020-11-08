// libs
import React from "react";
// icons
import { MenuOutlined } from "@ant-design/icons";
// others
import style from "./NavToggle.module.scss";

const NavToggle = ({ onClick }: { onClick: (event: any) => void }) => (
  <MenuOutlined
    className={style.toggleBtn}
    translate={null}
    onClick={onClick}
  />
);

export default NavToggle;
