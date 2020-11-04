// libs
import React from "react";
// others
import style from "./AddressInfo.module.scss";

const AddressInfo = ({ data }: { data: string }) => (
  <p>
    <span className={style.icon} />
    {data}
  </p>
);

export default AddressInfo;
