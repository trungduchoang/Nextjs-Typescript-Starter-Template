// libs
import React from "react";
// others
import style from "./BranchName.module.scss";

const BranchName = ({ name }: { name: string }) => (
  <div className={style.wrapper}>{name}</div>
);

export default BranchName;
