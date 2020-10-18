// libs
import React from "react";
// others
import style from "./MailInfo.module.scss";

const MailInfo = ({ data }: { data: string }) => (
  <div>
    <span className={style.icon} />
    <span className={style.data}>{data}</span>
  </div>
);

export default MailInfo;
