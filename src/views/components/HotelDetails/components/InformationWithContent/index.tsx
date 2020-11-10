// libs
import React from "react";
// components
import InformationTitle from "../InformationTitle";
import ContentInformation from "../ContentInformation";
// others
import style from "./InformationWithContent.module.scss";

type PROPS = {
  title: string;
  content: string;
};

const InformationWithContent = ({ title, content }: PROPS) => (
  <div className={style.wrapper}>
    <div className={style.title}>
      <InformationTitle title={title} />
    </div>
    <div className={style.content}>
      <ContentInformation content={content} />
    </div>
  </div>
);

export default InformationWithContent;
