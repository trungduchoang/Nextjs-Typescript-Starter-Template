// libs
import React from "react";
// hooks
import { useStore } from "@/hooks";
// components
import DetailedInformation from "../../components/DetailedInformation";
import InformationInline from "../../components/InformationInline";
import InformationWithContent from "../../components/InformationWithContent";
// others
import style from "./GuestInformation.module.scss";

/**
 * GuestInformation
 */
const GuestInformation = () => {
  const {
    pageData: {
      parking,
      bldgType,
      credit,
      roomService,
      otherService,
      privilege,
      roomCount,
      emptyRoom,
    },
  } = useStore({ page: "Developing" });

  return (
    <div className={style.wrapper}>
      <DetailedInformation />
      <InformationInline title="部屋" subTitle={`${roomCount}室`} />
      <InformationWithContent title="駐車場" content={parking} />
      <InformationInline title="建物" subTitle={bldgType} />
      <InformationWithContent
        title="支払い方法.クレジットカード"
        content={credit}
      />
      <InformationWithContent title="利用人数" content={roomCount} />
      <InformationWithContent title="途中外出" content={emptyRoom} />
      <InformationWithContent title="メンバー特典" content={roomService} />
      <InformationWithContent title="ルームサービス" content={otherService} />
      <InformationWithContent title="その他サービス" content={privilege} />
      <InformationWithContent
        title="ホテルグループ"
        content="ホテナビサイト "
        isLight
      />
      <InformationWithContent
        title="オフィシャルSNS"
        content="ホテナビサイト "
        isLight
      />
    </div>
  );
};

export default GuestInformation;
