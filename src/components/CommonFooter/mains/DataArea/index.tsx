// libs
import React from "react";
// mocks
import { branchInfo } from "@/mocks/common/branchInfo";
// components
import BranchInfo from "../../components/BranchInfo";

const DataArea = () => (
  <>
    {branchInfo.map((branchInfo) => (
      <BranchInfo branchInfo={branchInfo} key={branchInfo.branch} />
    ))}
  </>
);

export default DataArea;
