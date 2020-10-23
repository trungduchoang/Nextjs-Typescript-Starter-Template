// libs
import React from "react";
// components
import CommonHeader from "@/views/layout/CommonHeader";
import CommonFooter from "@/views/layout/CommonFooter";

const AppLayout = ({ children }: { children: JSX.Element }) => (
  <>
    <CommonHeader />
    <section className="main-wrapper">{children}</section>
    <CommonFooter />
  </>
);

export default AppLayout;
