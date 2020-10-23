// libs
import React from "react";
// components
import Logo from "./mains/Logo";
import GlobalMenu from "./mains/GlobalMenu";
// others
import style from "./CommonHeader.module.scss";

const CommonHeader = () => (
  <section className={style.wrapper}>
    <div className={style.inner}>
      <Logo />
      <GlobalMenu />
    </div>
  </section>
);

export default CommonHeader;
