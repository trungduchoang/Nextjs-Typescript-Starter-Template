// libs
import React from "react";
// components
import CommonHeader from "@/pages/CommonHeader";
import CommonFooter from "@/pages/CommonFooter";

const AppLayout = ({ children }: { children: JSX.Element }) => (
  <>
    <CommonHeader />
    <section className="main-wrapper">{children}</section>
    <CommonFooter />
  </>
);

export default AppLayout;
