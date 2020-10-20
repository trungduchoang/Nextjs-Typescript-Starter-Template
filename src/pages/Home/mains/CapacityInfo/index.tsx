// libs
import React from "react";
// components
import CapacityItem from "../../components/CapacityItem";
// datasource, mocks
import { capacityInfo } from "@/mocks/Home/capacityInfo";
// others
import style from "./CapacityInfo.module.scss";
import SectionTitle from "../../components/SectionTitle";

const CapacityInfo = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      <SectionTitle title="CHÚNG TÔI LÀM GÌ?" />
      {capacityInfo.map(({ title, description, imgSrc }) => (
        <CapacityItem {...{ title, description, imgSrc }} />
      ))}
    </div>
  </div>
);

export default CapacityInfo;
