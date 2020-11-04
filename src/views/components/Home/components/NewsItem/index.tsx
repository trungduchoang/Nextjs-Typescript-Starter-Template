// libs
import React from "react";
import Image from "next/image";
// others
import style from "./NewsItem.module.scss";

type IProps = {
  title: string;
  time: string;
  img: { src: string; width: number; height: number; alt: string };
};

const NewsItem = ({ title, time, img }: IProps) => (
  <div className={style.wrapper}>
    <div className={style.avatar}>
      <Image
        alt={img.alt}
        src={img.src}
        width={img.width}
        height={img.height}
      />
    </div>
    <h2 className={style.title}>{title}</h2>
    <p className={style.time}>{time}</p>
  </div>
);

export default NewsItem;
