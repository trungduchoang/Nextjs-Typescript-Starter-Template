// libs
import React from "react";
// components
import SectionTitle from "../../components/SectionTitle";
import NewsItem from "../../components/NewsItem";
// datasource, mocks
import { news } from "@/mocks/Home/news";
// others
import style from "./News.module.scss";

const News = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      <SectionTitle title="TIN TỨC" />
      <div className={style.itemsContainer}>
        {news.map(({ title, time, imgSrc }) => (
          <NewsItem {...{ title, time, imgSrc, key: title }} />
        ))}
      </div>
    </div>
  </div>
);

export default News;
