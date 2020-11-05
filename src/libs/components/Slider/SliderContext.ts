// libs
import { createContext, useContext } from "react";
// types
import { SLIDER_CONTEXT } from "./type";

const initialValues: SLIDER_CONTEXT = {};

export const SliderContext = createContext(initialValues);

export const useSlider = () => useContext(SliderContext);
