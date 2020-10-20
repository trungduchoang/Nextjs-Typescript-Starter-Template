// libs
import React from "react";
// others
import style from "./NavToggle.module.scss";

const NavToggle = () => (
  <span className={style.wrapper}>
    <button type="button" className={style.toggleBtn}>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
    </button>
  </span>
);

export default NavToggle;
