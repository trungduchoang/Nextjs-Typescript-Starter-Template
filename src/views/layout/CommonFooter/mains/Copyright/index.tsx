// libs
import React from "react";
// others
import style from "./Copyright.module.scss";

const Copyright = () => (
  <div className={style.wrapper}>
    <span className={style.copyright}>Citynow 2018, All right reserved</span>
    <a href="#" className={style.terms}>
      Terms of use
    </a>
  </div>
);

export default Copyright;
