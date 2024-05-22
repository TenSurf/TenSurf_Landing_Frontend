"use client"
import React, { ReactNode, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

const ToolCard = (
  {
    direction,
    image,
    imageAlt,
    children
  }: {
    direction: "left" | "right",
    image: string,
    imageAlt: string,
    children: ReactNode
  }) => {

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 md:max-w-[600px] lg:max-w-none px-6 sm:px-0 gap-12 items-start justify-between w-full relative z-20">
      <div data-aos={direction == "right" ? 'fade-left' : 'fade-right'}
           className={direction == "left" ? "order-1" : "order-2"}>
        {children}
      </div>
      <div data-aos={direction == 'left' ? 'fade-left' : 'fade-right'}
           className={`relative pb-[63%] ${direction == "right" ? "order-1" : "order-2"}`}>
        <Image src={image} alt={imageAlt} layout={"fill"} objectFit={"contain"}
               className={"rounded"} />
      </div>
    </div>
  );
};

export default ToolCard;