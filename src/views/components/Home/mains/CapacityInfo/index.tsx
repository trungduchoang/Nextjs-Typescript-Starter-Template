// libs
import React from "react";
// components
import { Gallery, GalleryItem, SectionTitle } from "@/libs/components";
// datasource, mocks
import { capacityInfo } from "@/mocks/Home";
// others
import style from "./CapacityInfo.module.scss";

const CapacityInfo = () => (
  <section className={style.wrapper}>
    <SectionTitle title="CHÚNG TÔI LÀM GÌ?" />
    <Gallery>
      {capacityInfo.map((item) => (
        <GalleryItem {...item} key={item.title} />
      ))}
    </Gallery>
  </section>
);

export default CapacityInfo;
