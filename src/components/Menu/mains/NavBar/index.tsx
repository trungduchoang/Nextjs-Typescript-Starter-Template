// libs
import React from "react";
import classNames from "classnames";
// types
import { NAV_ITEM } from "@/types/components/NavBar";
// others
import style from "./NavBar.module.scss";

const NavBar = ({
  menuItems,
  isVisibled,
}: {
  menuItems: NAV_ITEM[];
  isVisibled: boolean;
}) => (
  <div className={style.wrapper}>
    <nav className={style.navInner}>
      <ul
        className={classNames(style.menu, {
          [style.menuVisible]: isVisibled,
          [style.menuHided]: !isVisibled,
        })}
      >
        {menuItems.map(({ label, href }) => (
          <li className={style.menuItem} key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default NavBar;
