// libs
import React from "react";
// others
import style from "./AddressInfo.module.scss";

const AddressInfo = ({ data }: { data: string }) => (
  <div>
    <span className={style.icon} />
    <span className={style.data}>{data}</span>
  </div>
);

export default AddressInfo;
