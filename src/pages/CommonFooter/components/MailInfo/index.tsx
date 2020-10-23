// libs
import React from "react";
// others
import style from "./MailInfo.module.scss";

const MailInfo = ({ data }: { data: string }) => (
  <p>
    <span className={style.icon} />
    {data}
  </p>
);

export default MailInfo;
