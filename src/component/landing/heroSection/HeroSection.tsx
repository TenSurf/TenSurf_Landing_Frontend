import { HERO_SECTION } from "../../../constatns/landingPage.constants";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import React, { type FC, type RefObject, useEffect, useState } from "react";
import { AnimateLight } from "./AnimateLight";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import AOS from "aos";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface IProps {
  viewPortHeight?: number;
  headerHeight?: number;
  productsRef: RefObject<HTMLDivElement>;
}

export const HeroSection: FC<IProps> = ({
                                          viewPortHeight,
                                          headerHeight,
                                          productsRef
                                        }) => {
    useState({ signUp: false, signIn: false });

  const [videoModal, setVideoModal] = useState(false);

  const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      className={`relative w-full flex flex-col items-center overflow-hidden h-screen`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-14 lg:gap-20 relative z-[9] max-w-[1700px] mt-[2vh] lg:mt-[15vh]">
        <div className="flex gap-8 lg:gap-14 flex-col items-center lg:items-start text-center bottom-6 max-w-screen-xl mt-10 lg:mt-0">
          <h1 className="text-primaryGradient text-left staticPageTitle">
            {HERO_SECTION.title}
          </h1>
          <p className={'text-center lg:text-left font-light text-2xl lg:text-3xl'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores at, blanditiis, cum deleniti enim eos incidunt iste laboriosam minima natus,</p>
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
              Go to Tensurf Hub
            </Button>
          </a>
        </div>
        <div className={"relative rounded overflow-hidden h-fit mx-auto sm:max-w-2xl lg:max-w-none"}>
          <div
            className="cursor-pointer bg-black z-[11] absolute w-full h-full opacity-70 backdrop-blur flex items-center justify-center">
            <Dialog open={videoModal} modal={videoModal} onOpenChange={setVideoModal}>
              <DialogTrigger asChild>
                <Play onClick={() => setVideoModal(true)} size={64} className={"stroke-[#8f8f8f] hover:stroke-[#ffffff]"} strokeWidth={6} />
              </DialogTrigger>
              <DialogContent className={'w-[80vw] max-w-7xl'}>
                <div className="w-full h-full p-2">
                  <video controls loop playsInline width={"100%"} height={"100%"}>
                    <source src={"/video/TenSurf Hub Demo Website.mp4"} type="video/mp4" />
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <video muted autoPlay loop playsInline width={"100%"} height={"100%"} className={"relative z-[10] inset-0"}>
            <source src={"/video/dummy_video.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>

      <ChevronDownIcon
        onClick={() => {
          productsRef?.current?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute z-10 bottom-24 h-8 w-8 animate-bounce cursor-pointer"
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
