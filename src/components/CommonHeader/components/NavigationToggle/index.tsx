// libs
import React from "react";
// others
import style from "./NavigationToggle.module.scss";

const NavigationToggle = () => (
  <span>
    <button type="button" className={style.toggleBtn}>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
    </button>
  </span>
);

export default NavigationToggle;
