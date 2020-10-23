// libs
import React from "react";
// others
import style from "./CapacityItem.module.scss";

type IProps = {
  title: string;
  description: string;
  imgSrc: string;
};

const CapacityItem = ({ title, description, imgSrc }: IProps) => (
  <div className={style.wrapper}>
    <div className={style.titleAvatar}>
      <img alt={title} src={imgSrc} />
    </div>
    <h2 className={style.title}>{title}</h2>
    <p className={style.description}>{description}</p>
  </div>
);

export default CapacityItem;
