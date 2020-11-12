// libs
import React from "react";
import Image from "next/image";
import classNames from "classnames";
// others
import style from "./SlideItem.module.scss";

type PROPS = {
  /** imgSrc */
  imgSrc: string;
  /** isActive */
  isActive: boolean;
};
/**
 * SlideItem
 */
const SlideItem = ({ imgSrc, isActive }: PROPS) => (
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

export default SlideItem;
