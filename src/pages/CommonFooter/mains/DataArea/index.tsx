// libs
import React from "react";
// mocks
import { branchInfo } from "@/mocks/common/branchInfo";
// components
import BranchInfo from "../../components/BranchInfo";
// others
import style from "./DataArea.module.scss";

const DataArea = () => (
  <div className={style.wrapper}>
    {branchInfo.map((branchInfo) => (
      <BranchInfo branchInfo={branchInfo} key={branchInfo.branch} />
    ))}
  </div>
);

export default DataArea;
