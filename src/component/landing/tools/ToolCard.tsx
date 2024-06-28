"use client"
import React, { ReactNode, useRef } from "react";
import Image from "next/image";
import GsapAnimation from "@/utils/GsapAnimation";
import { cn } from "@/lib/utils";

const ToolCard = (
  {
    direction,
    image,
    imageAlt,
    children,
    scope
  }: {
    direction: "left" | "right";
    image: string;
    imageAlt: string;
    children: ReactNode;
    scope: string
  }) => {

  const container = useRef() as any;
  return (
    <GsapAnimation
      selector={".order-1"} fromVars={{ opacity: 0, xPercent: -100 }}
      toVars={{ opacity: 1, duration: 1, xPercent: 0 , scrollTrigger: { start: "top 75%" , trigger: ".order-1"}}}
      scope={`.${scope}`}
    >
      <GsapAnimation
        selector={".order-2"} fromVars={{ opacity: 0, xPercent: 100 }}
        toVars={{ opacity: 1, duration: 1, xPercent: 0, scrollTrigger: { start: "top 75%" , trigger: ".order-2"} }}
        scope={`.${scope}`}
      >
        <div
          ref={container}
          className={cn("grid grid-cols-1 lg:grid-cols-2 md:max-w-[600px] lg:max-w-none px-6 sm:px-0 gap-12 items-start justify-between w-full relative z-20", scope)}>
          <div
            className={direction == "left" ? "order-1" : "order-2"}
          >
            {children}
          </div>
          <div
            className={`relative pb-[63%] ${
              direction == "right" ? "order-1" : "order-2"
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              layout={"fill"}
              objectFit={"contain"}
              className={"rounded"}
            />
          </div>

        </div>
      </GsapAnimation>
    </GsapAnimation>
  );
};

export default ToolCard;
