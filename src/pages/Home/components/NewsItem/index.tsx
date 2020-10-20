// libs
import React from "react";
// others
import style from "./NewsItem.module.scss";

type IProps = {
  title: string;
  time: string;
  imgSrc: string;
};

const NewsItem = ({ title, time, imgSrc }: IProps) => (
  <div className={style.wrapper}>
    <div className={style.avatar}>
      <img alt={title} src={imgSrc} />
    </div>
    <h2 className={style.title}>{title}</h2>
    <p className={style.time}>&#x1F551; {time}</p>
  </div>
);

export default NewsItem;
