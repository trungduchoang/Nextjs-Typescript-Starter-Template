// libs
import React from "react";
// components
import InformationWithContent from "../../components/InformationWithContent";
import InformationInline from "../../components/InformationInline";
// others
import style from "./GuestInformation.module.scss";

const GuestInformation = () => (
  <div className={style.wrapper}>
    <InformationInline title="部屋" subTitle="20室" />
    <InformationWithContent
      title="駐車場"
      content="有0:25台 ハイルーフ可：25台"
    />
    <InformationInline title="建物" subTitle="ビ」レ形式" />
    <InformationWithContent
      title="支払い方法・クレジットカード"
      content="自動精算機：有0 カード：可VISA MASTER JCB DC AMEX UC"
    />
    <InformationWithContent title="利用人数" content="1人利用可3人以上利用可" />
    <InformationWithContent title="途中外出" content="0" />
    <InformationWithContent title="メンバー特典" content="あり：" />
    <InformationWithContent
      title="Jしームサーピス"
      content="あり：有名店のラーメンや本格力レー等のメニューが充実！ "
    />
    <InformationWithContent title="ホテルグループ" content="系列店 " />
    <InformationWithContent
      title="オフィシャJレサイト"
      content="ホテナビサイト "
    />
  </div>
);

export default GuestInformation;
