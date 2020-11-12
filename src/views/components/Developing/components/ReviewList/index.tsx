// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";
// components
import ReviewItem from "../ReviewItem";
// others
import style from "./ReviewList.module.scss";

/**
 * ReviewList
 */
const ReviewList = () => {
  const {
    pageData: { halfway, caution },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <ReviewItem title="ホテルPR" content={halfway} />
        <ReviewItem title="ホテル最新情報" content={caution} />
      </div>
    </div>
  );
};

export default ReviewList;
