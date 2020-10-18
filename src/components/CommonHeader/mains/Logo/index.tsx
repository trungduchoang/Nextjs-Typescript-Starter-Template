// libs
import React from "react";
// others
import style from "./Logo.module.scss";

const Logo = () => (
  <div className={style.wrapper}>
    <img
      alt="citynow-logo"
      src="http://citynow.jp/citynow/images/logo/logoasia.png"
      className={style.logo}
    />
  </div>
);

export default Logo;
