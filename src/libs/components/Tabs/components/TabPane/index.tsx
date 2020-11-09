/* eslint-disable react/no-unused-prop-types */
// libs
import React from "react";
// contexts
import { useTabsContext } from "../../TabsContext";
// others
import style from "./TabPane.module.scss";

type PROPS = {
  /** children */
  children: any;
  /** unique id */
  id: string | number;
  /** name of Tab */
  name: string | JSX.Element;
};
/**
 * TabPane - Container of tab content
 */
export const TabPane = ({ children, id }: PROPS) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === id;

  return <div className={style.wrapper}>{isActive && children}</div>;
};
