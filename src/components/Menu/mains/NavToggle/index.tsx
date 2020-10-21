// libs
import React from "react";
// others
import style from "./NavToggle.module.scss";

const NavToggle = () => (
  <span className={style.wrapper}>
    <div className={style.toggleBtn}>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
    </div>
  </span>
);

export default NavToggle;
