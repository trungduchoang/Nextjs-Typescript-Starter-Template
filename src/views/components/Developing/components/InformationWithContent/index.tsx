// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./InformationWithContent.module.scss";

type PROPS = {
  /** title */
  title: string;
  /** content */
  content: string;
  /** isLight */
  isLight?: boolean;
};

const InformationWithContent = ({ title, content, isLight = false }: PROPS) => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title={title} />
    </div>
    <div className={style.content}>
      <ContentInformation content={content} isLight={isLight} />
    </div>
  </div>
);

export default InformationWithContent;
