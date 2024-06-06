"use client"
import React, { createContext, ReactNode, RefObject, useContext, useRef } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";

const ScrollWrapper = ({children}: {children: ReactNode}) => {
  const productsRef = useRef<HTMLDivElement>(null);
  useScrollToTop();

  return (
    <>
      {children}
    </>
  );
};

export default ScrollWrapper;