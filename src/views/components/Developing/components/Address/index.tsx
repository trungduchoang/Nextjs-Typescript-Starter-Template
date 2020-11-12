// libs
import React from "react";
import { ChevronRightIcon, HeartIcon } from "@/libs/icons";
// hooks
import { useStore } from "@/hooks";
// others
import style from "./Address.module.scss";

/**
 * Address
 */
const Address = () => {
  const {
    pageData: { address, mapCode },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <div className={style.stayLogo}>
        <div style={{ height: 28 }}>
          <HeartIcon size={28} />
        </div>
        <div className={style.heartDes}>エリア</div>
      </div>
      <div className={style.addressWrapper}>
        <div className={style.addressInner}>
          <p className={style.address}>{address}</p>
          <p className={style.address}>{`マップコード: ${mapCode}`}</p>
        </div>
      </div>
      <ChevronRightIcon className={style.chevronIcon} size={27} />
    </div>
  );
};

export default Address;
