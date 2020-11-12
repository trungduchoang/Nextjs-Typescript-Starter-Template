// libs
import React from "react";
import { ChevronRightIcon } from "@/libs/icons";
// hooks
import { useStore } from "@/hooks";
// components
import InformationTitle from "../InformationTitle";
// others
import style from "./ContactItem.module.scss";

/**
 * ContactItem
 */
const ContactItem = () => {
  const {
    pageData: { telNo },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <InformationTitle title="電話" />
      <span className={style.phoneNumber}>{telNo}</span>
      <ChevronRightIcon className={style.chevronIcon} size={27} />
    </div>
  );
};

export default ContactItem;
