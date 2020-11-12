// libs
import React from "react";
import { ChevronRightIcon } from "@/libs/icons";
// components
import InformationTitle from "../InformationTitle";
// others
import style from "./DetailedInformation.module.scss";

/**
 * DetailedInformation
 */
const DetailedInformation = () => (
  <div className={style.wrapper}>
    <InformationTitle title="アクセス" />
    <span className={style.information}>ルート 検索</span>
    <ChevronRightIcon className={style.chevronIcon} size={27} />
  </div>
);

export default DetailedInformation;
