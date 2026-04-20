"use client";
import { createContext, useContext } from "react";

export interface SlideContextValue {
  page: number;
  total: number;
  navigate: (index: number) => void;
}

export const SlideContext = createContext<SlideContextValue>({
  page: 0,
  total: 0,
  navigate: () => {},
});

export const useSlide = () => useContext(SlideContext);
