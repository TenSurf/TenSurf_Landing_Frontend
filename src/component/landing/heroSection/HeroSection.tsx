import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import React from "react";
import { AnimateLight } from "./AnimateLight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const HeroSection = () => {

  return (
    <div
      className={`relative w-full flex flex-col items-center overflow-hidden h-screen`}
    >
      <div className="flex items-center flex-col justify-center gap-14 relative z-[9] max-w-2xl min-h-screen">
        <h1 className={"text-7xl text-center font-medium"}>
          Next Generation of Trading Platforms
        </h1>
        <p className={"text-xl font-normal text-center"}>
          At TenSurf, we are committed to revolutionizing trading and
          democratizing algorithmic trading. Our mission is to harness the power
          of Generative AI and Data Science to enable smart trading decisions to
          surf financial markets.
        </p>
        <a
          className={"flex justify-center w-fit"}
          href={process.env.NEXT_PUBLIC_SIGNUP_URL}
          target="_blank"
        >
          <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-8 px-16">
            <p className={"text-xl font-bold text-center"}>Go to TenSurf Hub</p>
            <ArrowRight size={20} strokeWidth={2} />
          </Button>
        </a>
      </div>

      <a href="#tools" className="lg:block hidden">
        <ChevronDownIcon className="absolute z-10 bottom-12 h-8 w-8 animate-bounce cursor-pointer hidden lg:block" />
      </a>

      <div
        className="absolute z-0 h-full w-full items-stretch flex-wrap gap-y-[20000px] justify-between flex gap-[200px] max-w-[90%]">
        {animateLights.map((light, index) => (
          <AnimateLight key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
