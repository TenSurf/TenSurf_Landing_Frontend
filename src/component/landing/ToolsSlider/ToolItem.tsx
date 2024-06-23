import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ToolItem = ({title , image ,description}: {title: string , description: string , image: string }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-end justify-between lg:justify-start gap-6 2xl:gap-24 py-1">
      <div className="w-full lg:w-[40%] xl:w-[30%] flex flex-col gap-4 lg:gap-8 justify-start order-2 lg:order-1">
        <h3 className={"text-2xl md:text-4xl xl:text-5xl font-normal !leading-normal"}>{title}</h3>
        <p className={"text-[#ADB5BD] text-lg line-clamp-4 font-extralight"}>{description}</p>
        <Link className={'hidden md:block w-fit'} href={""}>
          <Button className={"text-[#ADB5BD] border-[#ADB5BD] flex gap-2 rounded-full py-6 xl:py-8 bg-transparent w-fit"}
                  variant={"outline"}>
            <p className={"text-xl font-semibold"}>Learn More</p>
            <ArrowRight size={20} strokeWidth={2} />
          </Button>
        </Link>
      </div>
      <div style={{aspectRatio: 1.3}} className="w-full lg:w-[60%] xl:w-[52%] relative pb-[70%] lg:pb-[41%] xl:pb-[38%] order-1 lg:order-2">
        <Image src={image} fill alt={title} loading={"lazy"} />
      </div>
    </div>
  );
};

export default ToolItem;