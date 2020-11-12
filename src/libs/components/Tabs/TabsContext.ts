// libs
import { createContext, useContext } from "react";

type TABS_CONTEXT = {
  activeTab: number | string;
  setActiveTab: (key: number | string) => void;
  numberOfTabs: number;
};

const initialValues: TABS_CONTEXT = {
  activeTab: 0,
  setActiveTab: () => {},
  numberOfTabs: 0,
};

export const TabsContext = createContext(initialValues);

export const useTabsContext = () => useContext(TabsContext);
