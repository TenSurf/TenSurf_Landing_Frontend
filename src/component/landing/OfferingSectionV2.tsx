import React from "react";
import { OFFERING_SECTION } from "@/constatns/landingPage.constants";
import { GradientShape } from "@/component/general/GradientShape";
import Link from "next/link";
import ArrowRight from "@/icons/ArrowRight";
import QuoteIcon from "@/icons/QuoteIcon";
import Image from "next/image";
import ToolItem from "@/component/landing/tools/ToolItem";

const OfferingSectionV2 = () => {
  return (
    <div className='flex flex-col gap-10 text-white w-full items-center max-w-screen-xl'>
      <div className='flex flex-col gap-4 text-center'>
        <div className='text-3xl md:text-4xl lg:text-6xl font-semibold'>{OFFERING_SECTION.title}</div>
        {/*<div className='text-md md:text-2xl'>{OFFERING_SECTION.description}</div>*/}
      </div>
      <div className='flex flex-col gap-36 relative z-20 w-full items-center'>
        <ToolItem
          direction={'left'}
          image={'/images/LevelSurf-1.png'}
          imageAlt={"LevelSurf"}
          title={"LevelSurf"}
          description={"Provides real-time visualization and alerts for major support and resistance and other key market levels, aiding traders in identifying critical market thresholds."}
          quote={"“By automating the majority of steps related to patient follow-ups, Rad AI removes those manual tasks from our clinical team and gives them back more time to focus on caring for their patients.”"}
          user={'/images/aaron korbs.jpg'}
          userAlt={'Aaron Korbs'}
          userCompany={'/images/company.png'}
          userCompanyAlt={'company'}
          link={"#"}
          userJob={"Aaron Korbs position"}
          userName={"Aaron Korbs"}
        />
        <ToolItem
          direction={'right'}
          image={'/images/LevelSurf-1.png'}
          imageAlt={"LevelSurf"}
          title={"LevelSurf"}
          description={"Provides real-time visualization and alerts for major support and resistance and other key market levels, aiding traders in identifying critical market thresholds."}
          quote={"“By automating the majority of steps related to patient follow-ups, Rad AI removes those manual tasks from our clinical team and gives them back more time to focus on caring for their patients.”"}
          user={'/images/aaron korbs.jpg'}
          userAlt={'Aaron Korbs'}
          userCompany={'/images/company.png'}
          userCompanyAlt={'company'}
          link={"#"}
          userJob={"Aaron Korbs position"}
          userName={"Aaron Korbs"}
        />
        <div className="absolute -z-10 top-[20%] left-[50%] -translate-x-[50%] w-full scale-[400%]">
          <GradientShape />
        </div>
      </div>
    </div>
  );
};

export default OfferingSectionV2;