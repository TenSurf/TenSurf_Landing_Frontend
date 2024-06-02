"use client"
import React, { createContext, ReactNode, RefObject, useContext, useRef } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";

export const ProductRefContext = createContext<RefObject<HTMLDivElement> | undefined>(undefined)

const ScrollWrapper = ({children}: {children: ReactNode}) => {
  const productsRef = useRef<HTMLDivElement>(null);
  useScrollToTop();

  return (
    <ProductRefContext.Provider value={productsRef}>
      {children}
    </ProductRefContext.Provider>
  );
};

export default ScrollWrapper;

export const useProductRefContext = () => useContext(ProductRefContext);