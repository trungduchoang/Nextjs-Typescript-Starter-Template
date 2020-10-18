// libs
import React from "react";
// components
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";

const AppLayout = ({ children }: { children: JSX.Element }) => (
  <>
    <CommonHeader />
    <section className="main-wrapper">{children}</section>
    <CommonFooter />
  </>
);

export default AppLayout;
