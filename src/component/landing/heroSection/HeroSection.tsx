import React from "react";
import { AnimateLight } from "./AnimateLight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { isLoggedIn } from "@/helpers/auth";


const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const HeroSection = ({title , description}: {title: string , description: string}) => {

  return (
    <div
      className={`w-full flex flex-col items-center overflow-hidden h-screen`}
    >
      <div className="flex items-center flex-col justify-center gap-14 relative z-[9] max-w-3xl min-h-screen">
        <div className="flex items-center flex-col justify-center gap-6">
          <h1 className={"text-5xl sm:text-7xl text-center font-medium text-[#F8F9FA] !leading-[5.5rem]"}>
            {title}
          </h1>
          <p className={"text-lg sm:text-xl font-normal text-center text-[#DEE2E6]"}>
            {description}
          </p>
        </div>
        <Link
          className={"flex justify-center w-fit"}
          href={isLoggedIn() ? (process.env.NEXT_PUBLIC_HUB_URL ?? "") : "/signin"}
          target={isLoggedIn() ? "_blank" : '_self'}
        >
          <Button className="flex gap-1 sm:gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-4 px-8 sm:py-8 sm:px-16">
            <p className={"text-lg sm:text-xl font-normal sm:font-bold text-center"}><span className={'hidden sm:inline-block'}>Go to </span><span>TenSurf Hub</span></p>
            <ArrowRight size={20} strokeWidth={2} />
          </Button>
        </Link>
      </div>

      {/*<a href="#tools" className="lg:block hidden" aria-label={'tools'}>*/}
      {/*  <ChevronDownIcon className="absolute z-10 bottom-12 h-8 w-8 animate-bounce cursor-pointer hidden lg:block" />*/}
      {/*</a>*/}

      <div
        className="absolute z-0 h-full top-0 w-full items-stretch flex-wrap gap-y-[20000px] justify-between flex gap-[200px] max-w-[90%]">
        {animateLights.map((light, index) => (
          <AnimateLight key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
