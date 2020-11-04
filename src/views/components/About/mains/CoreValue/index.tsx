// libs
import React from "react";
// components
import { Gallery, GalleryItem, SectionTitle } from "@/libs/components";
// datasource, mocks
import { coreValueDataSource } from "@/mocks/About";
// others
import style from "./CoreValue.module.scss";

const CoreValue = () => (
  <section className={style.wrapper}>
    <SectionTitle title="GIÁ TRỊ CỐT LÕI" className={style.coreValueTitle} />
    <Gallery>
      {coreValueDataSource.map((item) => (
        <GalleryItem
          {...item}
          key={item.title}
          wrapperClass={style.coreValueItem}
        />
      ))}
    </Gallery>
  </section>
);

export default CoreValue;
