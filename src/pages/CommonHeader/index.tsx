// libs
import React from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
// components
import Logo from "../../components/CommonHeader/mains/Logo";
import GlobalMenu from "../../components/CommonHeader/mains/GlobalMenu";
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
