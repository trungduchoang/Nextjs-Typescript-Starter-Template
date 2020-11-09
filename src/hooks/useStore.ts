// libs
import { useSelector, TypedUseSelectorHook } from "react-redux";
// types
import { ROOT_STATE, PAGES_REDUCER } from "@/configs/Redux";

const useTypedSelector: TypedUseSelectorHook<ROOT_STATE> = useSelector;

/**
 * useStore - Type and Extract page-reducer by pageName
 */
export function useStore<PAGE extends PAGES_REDUCER>({
  page,
}: {
  page: PAGE;
}): ROOT_STATE[PAGE] {
  return useTypedSelector((state) => state[page]);
}
