// libs
import React from "react";
import classNames from "classnames";
import Image from "next/image";
// types
import { IMAGE_PROPS } from "@/types/common";
// others
import style from "./GalleryItem.module.scss";

type IProps = {
  title: string;
  description: string;
  img: IMAGE_PROPS;
  imgStyle?: "round" | "cover";
  wrapperClass?: string;
  avatarWrapperClass?: string;
};

export const GalleryItem = ({
  title,
  description,
  img: { alt, ...imgProps },
  imgStyle = "round",
  wrapperClass = "",
  avatarWrapperClass = "",
}: IProps) => (
  <div className={classNames(style.wrapper, wrapperClass)}>
    <div
      className={classNames(
        style.avatarWrapper,
        style[imgStyle],
        avatarWrapperClass
      )}
    >
      <Image alt={alt} {...imgProps} className={style.avatar} />
    </div>
    <h2 className={style.title}>{title}</h2>
    <p className={style.description}>{description}</p>
  </div>
);
