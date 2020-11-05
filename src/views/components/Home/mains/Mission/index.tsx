// libs
import React from "react";
import { BackgroundImage } from "@/libs/components";
// others
import style from "./Mission.module.scss";

const Mission = () => (
  <section className={style.wrapper}>
    <BackgroundImage src="/images/mission.webp" className={style.background}>
      <h1 className={style.title}>
        CITYNOW - NÂNG TẦM CÔNG NGHỆ, GIẢM KHOẢNG CÁCH GIỮA VIỆT NAM VÀ THẾ GIỚI
      </h1>
      <p className={style.description}>
        Citynow với trang thiết bị hiện đại cùng môi trường làm việc thân thiện
        với tinh thần &quot;Một người vì mọi người, mọi người vì mọi
        người&quot;. Chúng tôi muốn đem đến cho tất cả nhân viên một môi trường
        làm việc thuận tiện nhất, phát huy sức mạnh cá nhân và tập thể, thực
        hiện tâm huyết chung đưa công nghệ việt nam phát triển lên một tầm cao
        mới.Hãy gia nhập vào Citynow và cùng nhau chinh phục những tầm cao mới
        của công nghệ.
      </p>
      <a href="#">Tham gia ngay!</a>
    </BackgroundImage>
  </section>
);

export default Mission;
