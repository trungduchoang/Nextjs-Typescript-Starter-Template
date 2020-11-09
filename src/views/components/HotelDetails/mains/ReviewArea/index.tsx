// libs
import React from "react";
// components
import ReviewList from "../../components/ReviewList";
import RareItem from "../../components/RateItem";
import ContactItem from "../../components/ContactItem";
import Address from "../../components/Address";
// others
import style from "./ReviewArea.module.scss";

const ReviewArea = () => (
  <div className={style.wrapper}>
    <ReviewList />
    <RareItem />
    <ContactItem />
    <Address />
  </div>
);

export default ReviewArea;
