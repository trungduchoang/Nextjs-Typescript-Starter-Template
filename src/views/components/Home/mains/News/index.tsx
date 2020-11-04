// libs
import React from "react";
// components
import { SectionTitle } from "@/libs/components";
import NewsItem from "../../components/NewsItem";
// datasource, mocks
import { news } from "@/mocks/Home";
// others
import style from "./News.module.scss";

const News = () => (
  <section className={style.wrapper}>
    <div className={style.inner}>
      <SectionTitle title="TIN TỨC" />
      <div className={style.itemsContainer}>
        {news.map(({ title, time, img }) => (
          <NewsItem {...{ title, time, img, key: title }} />
        ))}
      </div>
    </div>
  </section>
);

export default News;
