// libs
import React from "react";
// components
import ReviewItem from "../ReviewItem";
// others
import style from "./ReviewList.module.scss";

const ReviewList = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      {Array.from(Array(2).keys()).map((index) => (
        <ReviewItem key={index} />
      ))}
    </div>
  </div>
);

export default ReviewList;
