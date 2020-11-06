// libs
import React from "react";
import classNames from "classnames";
// contexts
import { useTabsContext } from "../../TabsContext";
// others
import style from "./TabPane.module.scss";

type PROPS = {
  /** children */
  children: any;
  /** unique id */
  id: string | number;
};
/**
 * TabPane
 */
export const TabPane = ({ children, id }: PROPS) => {
  const { activeTab } = useTabsContext();
  return (
    <div
      className={classNames(style.wrapper, {
        [style.isActive]: activeTab === id,
      })}
    >
      {children}
    </div>
  );
};
