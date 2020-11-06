// libs
import React from "react";
// components
import TitleDescription from "../TitleDescription";
// others
import style from "./ReviewItem.module.scss";

const ReviewItem = () => (
  <div className={style.wrapper}>
    <TitleDescription />
    <div className={style.description}>
      <p>自そ符41品げ秀課ちたぽ低記ナヘ重内むざッ経自将リサ安桂キニヒ球</p>
    </div>
  </div>
);

export default ReviewItem;
