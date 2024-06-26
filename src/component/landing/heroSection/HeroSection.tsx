import { HERO_SECTION } from "../../../constatns/landingPage.constants";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import React from "react";
import { AnimateLight } from "./AnimateLight";
import { Button } from "@/components/ui/button";
import { isLoggedIn } from "@/helpers/auth";
import { HeroAuthHub } from "./HeroAuthHub";

export const HeroSection = () => {
  const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      className={`relative w-full flex flex-col items-center overflow-hidden h-screen`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-14 lg:gap-20 relative z-[9] max-w-screen-2xl mt-[2vh] lg:mt-[15vh]">
        <div className="flex gap-8 lg:gap-10 flex-col items-center lg:items-start text-center bottom-6 max-w-screen-xl mt-10 lg:mt-0">
          <h1 className="text-primaryGradient text-left staticPageTitle">
            {HERO_SECTION.title}
          </h1>
          <p
            className={
              "text-center lg:text-left font-extralight text-2xl lg:text-3xl"
            }
          >
            Experience the future of trading with TenSurf Hub, where our
            cutting-edge &#34;TenSurf Brain&#34; AI chat interface delivers
            real-time market analysis and insights directly to you. Integrate
            your trading strategy with our intuitive, no-code platform that
            makes algorithmic trading accessible to everyone.
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
          <HeroAuthHub />
        </div>
        <div
          className={
            "relative rounded-2xl overflow-hidden h-fit mx-auto sm:max-w-2xl lg:max-w-none w-full"
          }
        >
          {/* <div
            className={`${
              videoLoading == "full" && "hidden"
            } cursor-pointer bg-black z-[11] absolute w-full h-full opacity-30 backdrop-blur flex items-center justify-center`}
          >
            {videoLoading == "pend" ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <>
                <Play
                  onClick={async () => {
                    setVideoLoading("pend");
                    // await videoRef?.current?.play();
                    setVideoLoading("full");
                  }}
                  size={64}
                  className={"stroke-[#8f8f8f] hover:stroke-[#ffffff]"}
                  strokeWidth={6}
                />
              </>
            )}
          </div> */}
          <video
            poster={"/images/video-preview.png"}
            width={"100%"}
            height={"100%"}
            controls
          >
            <source
              src={`${process.env.NEXT_PUBLIC_HUB_URL}/videos/tensurf-demo.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <a href="/#services">
        <ChevronDownIcon className="absolute z-10 bottom-24 h-8 w-8 animate-bounce cursor-pointer hidden lg:block" />
      </a>

      <div className="absolute z-0 h-full w-full items-stretch flex-wrap gap-y-[20000px] justify-between flex gap-[200px] max-w-[90%]">
        {animateLights.map((light, index) => (
          <AnimateLight key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
