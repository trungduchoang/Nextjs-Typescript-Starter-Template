// libs
import React from "react";
import classNames from "classnames";
// types
import { NAV_ITEM } from "@/types/components/NavBar";
// others
import style from "./NavBar.module.scss";

type PROPS = {
  /** menuItems */
  menuItems: NAV_ITEM[];
  /** Navigation Bar is visible/not visible */
  isVisibled: boolean;
  /** Show/Hide Navigation Bar */
  toggleMenuVisible: Function;
  /** position of Dropdown Menu */
  position: "left" | "right";
};
/**
 * NavBar
 */
const NavBar = ({
  menuItems,
  isVisibled,
  toggleMenuVisible,
  position,
}: PROPS) => (
  <div className={style.wrapper}>
    <nav className={classNames(style.navInner, style[position])}>
      <ul
        className={classNames(style.menu, {
          [style.menuVisible]: isVisibled,
          [style.menuHided]: !isVisibled,
        })}
      >
        {menuItems.map(({ label, href }) => (
          <li
            className={style.menuItem}
            key={label}
            onClick={() => {
              toggleMenuVisible();
            }}
          >
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default NavBar;
