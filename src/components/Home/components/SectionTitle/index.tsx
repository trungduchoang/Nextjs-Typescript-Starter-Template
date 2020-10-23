// libs
import React from "@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
// others
import style from "./SectionTitle.module.scss";

const SectionTitle = ({ title }: { title: string }) => (
  <div className={style.wrapper}>
    <h1 className={style.title}>{title}</h1>
  </div>
);

export default SectionTitle;
