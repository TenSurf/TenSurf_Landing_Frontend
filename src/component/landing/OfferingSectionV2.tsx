import React from "react";
import { OFFERING_SECTION } from "@/constatns/landingPage.constants";
import { GradientShape } from "@/component/general/GradientShape";
import Link from "next/link";
import ArrowRight from "@/icons/ArrowRight";

const OfferingSectionV2 = () => {
  return (
    <div className='flex flex-col gap-10 text-white w-full items-center max-w-screen-xl'>
      <div className='flex flex-col gap-4 text-center'>
        <div className='text-3xl md:text-4xl lg:text-6xl font-semibold'>{OFFERING_SECTION.title}</div>
        {/*<div className='text-md md:text-2xl'>{OFFERING_SECTION.description}</div>*/}
      </div>
      <div className='flex flex-col gap-10 relative z-20 w-full'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-between w-full">
          <div className="">
            <h3 className={'font-extrabold text-4xl mb-5'}>LevelSurf</h3>
            <p className={'text-xl font-light mb-5'}>Provides real-time visualization and alerts for major support and resistance and other key market levels,
              aiding traders in identifying critical market thresholds.</p>
            <Link className={"transition-all flex items-center gap-1 hover:underline underline-offset-4"} href={"#"}><p className={'text-xl'}>LEARN MORE </p><ArrowRight className={'hidden'}/></Link>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
        <div className='absolute -z-10 top-[20%] left-[50%] -translate-x-[50%] w-full scale-[400%]'>
          <GradientShape />
        </div>
      </div>
    </div>
  );
};

export default OfferingSectionV2;