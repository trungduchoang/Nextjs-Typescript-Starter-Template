// libs
import { useSelector, TypedUseSelectorHook } from "react-redux";
// types
import { ROOT_STATE } from "@/configs/Redux/rootReducer";

// Get and typed for Redux store's root state.
export const useStore: TypedUseSelectorHook<ROOT_STATE> = useSelector;
