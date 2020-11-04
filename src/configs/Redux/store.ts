import { ANY_OBJECT } from "@/types/common";
import { useMemo } from "react";
import { createStore } from "redux";
import rootReducer from "./rootReducer";

const initStore = (initialState: ANY_OBJECT = {}) =>
  createStore(rootReducer, initialState);

type T = ReturnType<typeof initStore> | undefined;

let store: T;

const initializeStore = (preloadedState: ANY_OBJECT) => {
  let _store: T = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const useInitStore = (initialState: ANY_OBJECT) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
