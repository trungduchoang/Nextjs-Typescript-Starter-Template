// libs
import React from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
// others
import style from "./NavToggle.module.scss";

const NavToggle = ({ onClick }: { onClick: (event: any) => void }) => (
  <div className={style.wrapper} onClick={onClick}>
    <div className={style.toggleBtn}>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
      <div className={style.iconBar}></div>
    </div>
  </div>
);

export default NavToggle;
