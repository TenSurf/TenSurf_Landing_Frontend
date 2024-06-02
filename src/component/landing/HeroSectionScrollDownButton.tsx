"use client";
import React from "react";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import { useProductRefContext } from "@/component/landing/ScrollWrapper";

const HeroSectionScrollDownButton = () => {

  const ref = useProductRefContext();

  return (
    <ChevronDownIcon
      onClick={() => {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
      }}
      className="absolute z-10 bottom-24 h-8 w-8 animate-bounce cursor-pointer hidden lg:block"
    />
  );
};

export default HeroSectionScrollDownButton;