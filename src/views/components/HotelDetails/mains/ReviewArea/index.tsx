// libs
import React from "react";
// components
import ReviewList from "../../components/ReviewList";
import RareItem from "../../components/RateItem";
// others
import style from "./ReviewArea.module.scss";

const ReviewArea = () => (
  <div className={style.wrapper}>
    <ReviewList />
    <RareItem />
  </div>
);

export default ReviewArea;
