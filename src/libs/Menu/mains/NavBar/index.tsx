// libs
import React from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
import classNames from "@/components/Home/components/ShowMockAPI/node_modules/classnames";
// types
import { NAV_ITEM } from "@/types/components/NavBar";
// others
import style from "./NavBar.module.scss";

const NavBar = ({
  menuItems,
  isVisibled,
  toggleMenuVisible,
}: {
  menuItems: NAV_ITEM[];
  isVisibled: boolean;
  toggleMenuVisible: Function;
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
