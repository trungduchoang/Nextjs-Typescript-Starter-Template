// libs
import React, { useState } from "react";
import { TabsContext } from "../../TabsContext";
// others
import style from "./Tabs.module.scss";

type PROPS = {
  /** children */
  children: any;
  /** defaultActiveKey */
  defaultActiveKey: string | number;
};
/**
 * Tabs
 */
export const Tabs = ({ children, defaultActiveKey }: PROPS) => {
  const [activeTab, setActiveTab] = useState(defaultActiveKey);
  const hasOneTabs = Array.isArray(children);
  const numberOfTabs = hasOneTabs ? children.length : 1;

  return (
    <div className={style.wrapper}>
      <TabsContext.Provider value={{ activeTab, setActiveTab, numberOfTabs }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

/// ///////////Add Control for tabs
