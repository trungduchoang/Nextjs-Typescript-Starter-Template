// libs
import React, { useState } from "react";
import { TabsContext } from "../../TabsContext";
import { TabHead } from "../TabHead";
// others
import style from "./Tabs.module.scss";

type PROPS = {
  /** children - Tabs must has at least 2 children */
  children: any[];
  /** defaultActiveTab */
  defaultActiveTab: string | number;
};
/**
 * Tabs
 */
export const Tabs = ({ children, defaultActiveTab }: PROPS) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const hasOneTabs = Array.isArray(children);
  const numberOfTabs = hasOneTabs ? children.length : 1;

  const tabHeadDataSource = children.map(({ props }) => ({
    id: props.id,
    name: props.name,
  }));

  return (
    <div className={style.wrapper}>
      <TabsContext.Provider value={{ activeTab, setActiveTab, numberOfTabs }}>
        <div className={style.header}>
          <TabHead dataSource={tabHeadDataSource} />
        </div>
        <div className={style.content}>{children}</div>
      </TabsContext.Provider>
    </div>
  );
};
