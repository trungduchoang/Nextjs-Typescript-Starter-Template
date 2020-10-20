// libs
import React from "react";
// others
import style from "./PhoneInfo.module.scss";

const PhoneInfo = ({ data }: { data: string }) => (
  <p>
    <span className={style.icon} />
    {data}
  </p>
);

export default PhoneInfo;
