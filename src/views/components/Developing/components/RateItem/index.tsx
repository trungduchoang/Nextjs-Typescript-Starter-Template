// libs
import React from "react";
import { ChevronRightIcon } from "@/libs/icons";
// hooks
import { useStore } from "@/hooks";
// components
import RatePoints from "../RatePoints";
// others
import style from "./RateItem.module.scss";

const RateItem = () => {
  const {
    pageData: { staredTimes, avgPoint },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <span>{`クチコミ平均 (${staredTimes}件)`}</span>
      <RatePoints points={avgPoint} />
      <ChevronRightIcon className={style.chevronIcon} size={27} />
    </div>
  );
};

export default RateItem;
