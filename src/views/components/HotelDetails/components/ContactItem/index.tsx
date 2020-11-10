// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
// others
import style from "./ContactItem.module.scss";

const ContactItem = () => (
  <div className={style.wrapper}>
    <InformationTitle title="自そ符" />
    <span className={style.phoneNumber}>0166-48-1919</span>
    <div></div>
  </div>
);

export default ContactItem;
