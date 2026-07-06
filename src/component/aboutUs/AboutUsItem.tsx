import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AboutUsItem = ({ description, direction, title, image, className }: {
  title: string,
  description: string,
  image: string,
  direction: "left" | "right",
  className?: string
}) => {
  return (
    <div className={cn("w-full relative grid grid-cols-12 gap-8 lg:gap-14 items-center", className)}>
      <div className={`col-span-12 lg:col-span-5 relative ${direction == "left" ? "lg:order-1" : "lg:order-2"}`}>
        <div className={"relative w-full flex flex-col gap-6"}>
          <div
            style={{
              opacity: "0.3",
              background: "#062ACA",
              filter: "blur(150px)"
            }}
            className="pointer-events-none z-0 absolute bottom-0 left-10 w-[350px] h-[200px] rounded-full"
          ></div>
          <h2 className={"relative z-10 text-2xl sm:text-3xl font-bold !text-[#E9ECEF]"}>{title}</h2>
          <p className={"relative z-10 text-lg sm:text-xl font-normal !text-[#CED4DA] leading-relaxed"}>
            {description}
          </p>
        </div>
      </div>
      <div
        className={`col-span-12 lg:col-span-7 relative w-full aspect-[16/10] max-h-[480px] rounded-3xl overflow-hidden ${direction == "left" ? "lg:order-2" : "lg:order-1"}`}>
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
      </div>
    </div>
  );
};

export default AboutUsItem;
