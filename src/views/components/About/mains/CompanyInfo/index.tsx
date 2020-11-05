// libs
import React from "react";
import classNames from "classnames";
import Image from "next/image";
// others
import style from "./CompanyInfo.module.scss";

const CompanyInfo = () => (
  <section className={style.wrapper}>
    <div className={style.inner}>
      <div className={classNames(style.infoCard, style.CEO)}>
        <Image
          alt="company CEO"
          src="http://citynow.vn/citynow/images/page/introduction/boss.png"
          width={300}
          height={300}
        />
      </div>
      <div className={classNames(style.infoCard, style.info)}>
        <h1 className={style.header}>THÔNG TIN CÔNG TY</h1>
        <p>
          Công ty TNHH Citynow được thành lập bởi CEO Phan Tuấn Tài và đi vào
          hoạt động từ tháng 07/2016. Anh là cựu sinh viên Khoa Công Nghệ Thông
          Tin thuộc Trường ĐH Khoa Học Tự Nhiên, hơn 8 năm du học và 4 năm làm
          việc tại Nhật bản, từng làm việc trong những công ty game hàng đầu ở
          Nhật, có rất nhiều kinh nghiệm làm việc vận hành platform game, phát
          triển game, dịch vụ web, mobile application.
        </p>
        <p>
          Với nền tảng kinh nghiệm đã có và niềm tin của người Nhật anh quyết
          định thành lập Công ty TNHH Citynow tại Tp.Hồ Chí Minh, Việt Nam và
          Công ty Cổ phần Citynow Asia tại Tp.Tokyo, Nhật Bản. Cùng với tâm
          huyết giảm khoảng cách nền Công Nghệ Thông Tin giữa Việt Nam với các
          nước trên thế giới đồng thời tạo ra nhiều cơ hội học tập và làm việc
          cho các bạn trẻ ở Việt Nam.
        </p>
      </div>
    </div>
  </section>
);

export default CompanyInfo;
