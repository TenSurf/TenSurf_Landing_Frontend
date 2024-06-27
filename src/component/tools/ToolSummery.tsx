"use client"
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ToolSummery = ({title , description}: {title: string , description: string}) => {

  useGSAP(() => {
    gsap.fromTo(".summery", { opacity: 0, y: 100 }, {
      opacity: 1, y: 0, duration: 1, scrollTrigger: {
        trigger: ".summery",
        start: "center bottom"
      }
    });
  })

  return (
    <div className="w-full flex flex-col gap-8 summery">
      <h3 className={"text-2xl md:text-3xl lg:text-4xl font-bold"}>{title}</h3>
      <p className={"text-lg md:text-xl lg:text-2xl font-light"}>{description}</p>
    </div>
  );
};

export default ToolSummery;