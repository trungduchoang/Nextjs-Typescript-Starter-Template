// libs
import React from "react";
// others
import style from "./PhoneInfo.module.scss";

const PhoneInfo = ({ data }: { data: string }) => (
  <div>
    <span className={style.icon} />
    <span className={style.data}>{data}</span>
  </div>
);

export default PhoneInfo;
