import { HERO_SECTION } from "../../../constatns/landingPage.constants";
import React, { useRef, useState } from "react";
import { AnimateLight } from "./AnimateLight";
// import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";
import HeroSectionScrollDownButton from "@/component/landing/HeroSectionScrollDownButton";
import HeroSectionVideo from "@/component/landing/HeroSectionVideo";

export const HeroSection = () => {

  const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      className={`relative w-full flex flex-col items-center overflow-hidden h-screen`}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-14 lg:gap-20 relative z-[9] max-w-screen-2xl mt-[2vh] lg:mt-[15vh]">
        <div
          className="flex gap-8 lg:gap-10 flex-col items-center lg:items-start text-center bottom-6 max-w-screen-xl mt-10 lg:mt-0">
          <h1 className="text-primaryGradient text-left staticPageTitle">
            {HERO_SECTION.title}
          </h1>
          <p className={"text-center lg:text-left font-extralight text-2xl lg:text-3xl"}>
            Experience the future of trading with TenSurf Hub, where our cutting-edge &#34;TenSurf Brain&#34; AI chat
            interface
            delivers real-time market analysis and insights directly to you.
            Integrate your trading strategy with our intuitive, no-code platform that makes algorithmic trading
            accessible to everyone.
          </p>
          {/*<ul className={"w-full px-6 list-disc text-left"}>*/}
          {/*  {HERO_SECTION.items.map((val) => (*/}
          {/*    <li key={val}>*/}
          {/*      <h4 className={"font-light text-2xl lg:text-3xl"}>{val}</h4>*/}
          {/*    </li>*/}
          {/*  ))}*/}
          {/*</ul>*/}
          {/*<h2 className='text-md md:text-2xl font-semibold mt-4 mb-6 leading-6 md:leading-8'>*/}
          {/*  {HERO_SECTION.description}*/}
          {/*</h2>*/}
          {/*<div className="font-bold md:font-extrabold text-lg md:text-xl">*/}
          {/*  {HERO_SECTION.description2}*/}
          {/*</div>*/}
          <a href={process.env.NEXT_PUBLIC_HUB_URL}>
            <Button
              // onClick={
              //   () =>
              //     isLoggedIn
              //       ? router.push(ROUTE.chart)
              //       : setShouldShowSignInSignUpModal({
              //           signUp: true,
              //           signIn: false,
              //         })
              // isLoggedIn ? router.push(ROUTE.chart) : toast.error('To register, contact TenSurf support')
              // }
              className="w-52 h-16 bg-primary font-bold text-lg"
            >
              Go to TenSurf Hub
            </Button>
          </a>
        </div>
        <div
          className={
            "relative rounded-2xl overflow-hidden h-fit mx-auto sm:max-w-2xl lg:max-w-none w-full"
          }
        >
          <HeroSectionVideo/>
        </div>
      </div>

      <HeroSectionScrollDownButton />

      <div
        className="absolute z-0 h-full w-full items-stretch flex-wrap gap-y-[20000px] justify-between flex gap-[200px] max-w-[90%]">
        {animateLights.map((light, index) => (
          <AnimateLight key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
