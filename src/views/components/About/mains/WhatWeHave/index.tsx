// libs
import React from "react";
// components
import { Gallery, GalleryItem, SectionTitle } from "@/libs/components";
// datasource, mocks
import { whatWeHaveDataSource } from "@/mocks/About";
// others
import style from "./WhatWeHave.module.scss";

const WhatWeHave = () => (
  <section className={style.wrapper}>
    <SectionTitle title="CHÚNG TÔI LÀM GÌ?" />
    <Gallery>
      {whatWeHaveDataSource.map((item) => (
        <GalleryItem
          {...item}
          key={item.title}
          wrapperClass={style.whatWeHaveItem}
        />
      ))}
    </Gallery>
  </section>
);

export default WhatWeHave;
