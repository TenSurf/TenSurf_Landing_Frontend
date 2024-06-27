import React from "react";
import { AnimateLight } from "./AnimateLight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { isLoggedIn } from "@/helpers/auth";
import { HeroAuthHub } from "./HeroAuthHub";


const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const HeroSection = () => {

  return (
    <div
      className={`relative w-full flex flex-col items-center overflow-hidden h-screen`}
    >
      <div className="flex items-center flex-col justify-center gap-14 relative z-[9] max-w-2xl min-h-screen">
        <div className="flex items-center flex-col justify-center gap-14 ">
          <h1 className={"text-5xl sm:text-7xl text-center font-medium text-[#F8F9FA]"}>
            Next Generation of Trading Platforms
          </h1>
          <p className={"text-lg sm:text-xl font-normal text-center text-[#DEE2E6]"}>
            At TenSurf, we are committed to revolutionizing trading and
            democratizing algorithmic trading. Our mission is to harness the power
            of Generative AI and Data Science to enable smart trading decisions to
            surf financial markets.
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
        className="absolute z-0 h-full w-full items-stretch flex-wrap gap-y-[20000px] justify-between flex gap-[200px] max-w-[90%]">
        {animateLights.map((light, index) => (
          <AnimateLight key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
