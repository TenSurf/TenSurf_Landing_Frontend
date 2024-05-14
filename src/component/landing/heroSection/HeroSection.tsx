import { HERO_SECTION } from "../../../constatns/landingPage.constants";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import React, { type FC, type RefObject, useEffect, useState } from "react";
import { AnimateLight } from "./AnimateLight";
// import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import AOS from "aos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface IProps {
  viewPortHeight?: number;
  headerHeight?: number;
  productsRef: RefObject<HTMLDivElement>;
}

export const HeroSection: FC<IProps> = (
  {
    viewPortHeight,
    headerHeight,
    productsRef
  }) => {

  let router = useRouter();

  useState({ signUp: false, signIn: false });

  useEffect(() => {
    AOS.init({
      duration: 2000,
      anchorPlacement: "center-center",
      once: true
    });
  }, []);

  const [videoModal, setVideoModal] = useState(false);

  const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      className={`relative w-full flex flex-col items-center overflow-hidden h-screen`}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-14 lg:gap-20 relative z-[9] max-w-[1700px] mt-[2vh] lg:mt-[15vh]">
        <div
          className="flex gap-8 lg:gap-10 flex-col items-center lg:items-start text-center bottom-6 max-w-screen-xl mt-10 lg:mt-0">
          <h1 className="text-primaryGradient text-left staticPageTitle">
            {HERO_SECTION.title}
          </h1>
          <p className={"text-center lg:text-left font-extralight text-2xl lg:text-3xl"}>
            Experience the future of trading with TenSurf Hub, where our cutting-edge "TenSurf Brain" AI chat interface
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
          className={"relative rounded-2xl overflow-hidden h-fit mx-auto sm:max-w-2xl lg:max-w-none pb-[67%] w-full"}>
          <div
            className="cursor-pointer bg-black z-[11] absolute w-full h-full opacity-30 backdrop-blur flex items-center justify-center">
            <Link target={'_blank'} href={`${process.env.NEXT_PUBLIC_HUB_URL}/videos/tensurf-demo.mp4`}>
              <Play size={64} className={"stroke-[#8f8f8f] hover:stroke-[#ffffff]"}
                    strokeWidth={6} />
            </Link>
          </div>
          <Image src={"/images/video-preview.png"} alt={"landing video"} layout={"fill"} />
        </div>
      </div>

      <ChevronDownIcon
        onClick={() => {
          productsRef?.current?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute z-10 bottom-24 h-8 w-8 animate-bounce cursor-pointer hidden lg:block"
      />

      <div
        className="absolute z-0 h-full w-full items-stretch flex-wrap gap-y-[20000px] justify-between flex gap-[200px] max-w-[90%]">
        {animateLights.map((light, index) => (
          <AnimateLight key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
