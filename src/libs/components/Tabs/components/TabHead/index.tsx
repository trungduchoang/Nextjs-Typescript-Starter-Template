// libs
import React from "react";
// contexts
import { useTabsContext } from "../../TabsContext";
// others
import style from "./TabHead.module.scss";
import { TabHeadItem } from "../TabHeadItem";

type PROPS = {
  /** Tabs's children properties */
  dataSource: {
    /** same id with TabPane id */
    id: number | string;
    /** Tab's name/label */
    name: string;
  }[];
};
/**
 * TabHead -  Tab Header for navigation
 */
export const TabHead = ({ dataSource }: PROPS) => {
  const { activeTab, setActiveTab } = useTabsContext();

  return (
    <div className={style.wrapper}>
      {dataSource.map(({ id, name }) => (
        <TabHeadItem
          key={id}
          name={name}
          isActive={id === activeTab}
          onClick={() => {
            setActiveTab(id);
          }}
        />
      ))}
    </div>
  );
};
