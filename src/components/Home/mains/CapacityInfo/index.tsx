// libs
import React from "@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
// components
import SectionTitle from "../../components/SectionTitle";
import CapacityItem from "../../components/CapacityItem";
// datasource, mocks
import { capacityInfo } from "@/mocks/Home";
// others
import style from "./CapacityInfo.module.scss";

const CapacityInfo = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      <SectionTitle title="CHÚNG TÔI LÀM GÌ?" />
      <div className={style.capacityItemsContainer}>
        {capacityInfo.map(({ title, description, imgSrc }) => (
          <CapacityItem {...{ title, description, imgSrc, key: title }} />
        ))}
      </div>
    </div>
  </div>
);

export default CapacityInfo;
