// libs
import React from "react";
// others
import style from "./NavToggle.module.scss";

const NavToggle = ({ onClick }: { onClick: (event: any) => void }) => (
  <div className={style.wrapper} onClick={onClick}>
    <div className={style.toggleBtn}>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
    </div>
  </div>
);

export default NavToggle;
