// libs
import React from "react";
import Image from "next/image";
// others
import style from "./SubDescription.module.scss";

const SubDescription = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      <Image src="/images/icon.png" alt="icon" width={35} height={32} />
      <div className={style.tag}>
        <span>自そ符</span>
      </div>
    </div>
  </div>
);

export default SubDescription;
