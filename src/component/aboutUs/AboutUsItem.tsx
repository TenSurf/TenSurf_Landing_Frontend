"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const AboutUsItem = ({ description, direction, title, image, className }: {
  title: string,
  description: string,
  image: string,
  direction: "left" | "right",
  className?: string
}) => {

  const timeline = useRef<any>();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      timeline.current = gsap.timeline().to(".about-us-text", {
        top: 500
      });

      ScrollTrigger.create({
        animation: timeline.current,
        trigger: ".item-image",
        start: "top 0%",
        end: "bottom 0%",
        scrub: 2,
        pin: true
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className={cn("w-full relative grid grid-cols-12 gap-8", className)}>
      <div className={`col-span-12 lg:col-span-5 relative h-full w-full ${direction == "left" ? "lg:order-1" : "lg:order-2"}`}>
        <div className={"about-us-text lg:absolute lg:bottom-0 lg:left-0 w-full h-fit flex flex-col gap-8"}>
          <h2 className={"text-3xl font-bold"}>{title}</h2>
          <p className={"text-xl font-normal"}>
            {description}
          </p>
        </div>
      </div>
      <div className={`col-span-12 lg:col-span-7 lg:max-w-[700px] mx-auto relative pb-[90vh] w-full rounded-3xl overflow-hidden item-image ${direction == "left" ? "lg:order-2" : "lg:order-1"}`}>
        <Image src={image} alt={title} fill />
      </div>
    </div>
  );
};

export default AboutUsItem;