// libs
import React from "react";
// components
import ReviewList from "../../components/ReviewList";
// others
import style from "./ReviewArea.module.scss";

const ReviewArea = () => (
  <div className={style.wrapper}>
    <ReviewList />
  </div>
);

export default ReviewArea;
