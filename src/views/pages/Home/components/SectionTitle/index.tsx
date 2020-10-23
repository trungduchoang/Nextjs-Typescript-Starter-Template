// libs
import React from "react";
// others
import style from "./SectionTitle.module.scss";

const SectionTitle = ({ title }: { title: string }) => (
  <div className={style.wrapper}>
    <h1 className={style.title}>{title}</h1>
  </div>
);

export default SectionTitle;
