// libs
import React from "react";
// types
import { NAV_ITEM } from "@/types/common/NavBar";
// others
import style from "./NavBar.module.scss";

const NavBar = ({ items }: { items: Array<NAV_ITEM> }) => (
  <div className={style.wrapper}>
    <nav className={style.menu}>
      <ul>
        {items.map(({ label, href }) => (
          <li key={label} className={style.menuItem}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default NavBar;
