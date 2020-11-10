// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./PaymentMethod.module.scss";

const PaymentMethod = () => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title="支払い方法・クレジットカード" />
    </div>
    <div className={style.content}>
      <ContentInformation content="自動精算機：有0 カード：可VISA MASTER JCB DC AMEX UC " />
    </div>
  </div>
);

export default PaymentMethod;
