"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



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

  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(left.current, { opacity: 0, x: -200 }, {
      opacity: 1, x: 0, duration: 1.5, scrollTrigger: {
        trigger: left.current,
        start: "center bottom"
      }
    });

    gsap.fromTo(right.current, { opacity: 0, x: 200 }, {
      opacity: 1, x: 0, duration: 1.5, scrollTrigger: {
        trigger: right.current,
        start: "center bottom"
      }
    });
  })

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 md:max-w-[600px] lg:max-w-none px-6 sm:px-0 gap-12 items-start justify-between w-full relative z-20">
      <div
        ref={direction == "left" ? left : right}
        className={direction == "left" ? "order-1" : "order-2"}>
        {children}
      </div>
      <div
        ref={direction == "left" ? right : left}
        className={`relative pb-[63%] ${direction == "right" ? "order-1" : "order-2"}`}>
        <Image src={image} alt={imageAlt} layout={"fill"} objectFit={"contain"}
               className={"rounded"} />
      </div>
    </div>
  );
};

export default ToolCard;