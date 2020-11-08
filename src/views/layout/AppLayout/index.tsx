// libs
import React from "react";
// components
import CommonHeader from "@/views/layout/CommonHeader";
// others
import style from "./AppLayout.module.scss";

const AppLayout = ({ children }: { children: JSX.Element }) => (
  <>
    <div className={style.wrapper}>{children}</div>
    <CommonHeader />
  </>
);

export default AppLayout;
