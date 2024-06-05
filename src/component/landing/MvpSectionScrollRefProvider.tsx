'use client'
import React, { ReactNode } from "react";
import { useProductRefContext } from "@/component/landing/ScrollWrapper";

const MvpSectionScrollRefProvider = ({children}: {children: ReactNode}) => {

  let ref = useProductRefContext();

  return (
    <div ref={ref} id="Productss">
      {children}
    </div>
  );
};

export default MvpSectionScrollRefProvider;