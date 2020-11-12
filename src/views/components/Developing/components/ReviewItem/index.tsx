// libs
import React from "react";
// components
import TitleDescription from "../TitleDescription";
// others
import style from "./ReviewItem.module.scss";

type PROPS = {
  /** title */
  title: string;
  /** content */
  content: string;
};
/**
 * ReviewItem
 */
const ReviewItem = ({ title, content }: PROPS) => (
  <div className={style.wrapper}>
    <TitleDescription isBackground title={title} />
    <div className={style.description}>{content}</div>
  </div>
);

export default ReviewItem;
