// libs
import React from "react";
// components

import ContentInformation from "../../components/ContentInformation";
// others
import style from "./Footer.module.scss";

const Footer = () => (
  <div className={style.wrapper}>
    <ContentInformation
      isLight
      content="ハッピーホテルでは正確な情報の掲載を心がけておI)ますが、 料金その他情報につきましてはホテル様にこ確認をお願いいた します"
    />
  </div>
);

export default Footer;
