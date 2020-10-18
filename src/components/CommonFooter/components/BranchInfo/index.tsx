// libs
import React from "react";
// components
import BranchName from "../BranchName";
import PhoneInfo from "../PhoneInfo";
import AddressInfo from "../AddressInfo";
import MailInfo from "../MailInfo";
// types
import { BRANCH_INFO } from "@/types/components/Home";
// others
import style from "./BranchInfo.module.scss";

const BranchInfo = ({ branchInfo }: { branchInfo: BRANCH_INFO }) => (
  <div className={style.wrapper}>
    <BranchName name={branchInfo.branch} />
    <PhoneInfo data={branchInfo.phone} />
    <AddressInfo data={branchInfo.address} />
    <MailInfo data={branchInfo.mail} />
  </div>
);

export default BranchInfo;
