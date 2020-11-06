// libs
import React from "react";
import Image from "next/image";
import classNames from "classnames";
// others
import style from "./SlideItem.module.scss";

export const SlideItem = ({
  imgSrc,
  isActive
}: {
  imgSrc: string;isActive:boolean
}) => (
  <div className={style.wrapper}>
    <div
      className={classNames(style.inner, {
        [style.active]: isActive,
      })}
    >
      <Image src={imgSrc} layout="fill" />
    </div>
  </div>
);
