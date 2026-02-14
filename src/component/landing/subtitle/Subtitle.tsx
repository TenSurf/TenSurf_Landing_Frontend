import React from "react";
import SubtitleIcon from "@/icons/SubtitleIcon";
import SubtitleBackground from "@/component/landing/subtitle/SubtitleBackground";

const SubtitleText = ({ title }: { title: string }) => (
  <span className="font-space-grotesk uppercase tracking-wider text-white font-bold text-lg sm:text-xl">
    {title}
  </span>
);

const Strip1Items = () => (
  <>
    <SubtitleText title={"Frustrated with ChatGPT Code?"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"No Coding Required"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"Describe in Plain English"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"AI Writes the Code"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"Compiles Automatically"} />
    <span className="mx-10"><SubtitleIcon /></span>
  </>
);

const Strip2Items = () => (
  <>
    <SubtitleText title={"Hours of Learning \u2192 Minutes of Describing"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"Skip the Coding Bootcamp"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"No More Syntax Errors"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"Stop Paying Developers"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"From Idea to Code in Minutes"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"No Copy-Paste Fails"} />
    <span className="mx-10"><SubtitleIcon /></span>
  </>
);

const Strip3Items = () => (
  <>
    <SubtitleText title={"Your Data Never Leaves Your Machine"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"Verified NinjaTrader Vendor"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"Review Rules Before You Generate"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"Works With Your Existing NT8 Setup"} />
    <span className="mx-10"><SubtitleIcon /></span>
    <SubtitleText title={"No Third-Party Dependencies"} />
    <span className="mx-10"><SubtitleIcon /></span>
  </>
);

const Subtitle = () => {
  return (
    <div className={"flex flex-col gap-[6vw] sm:gap-[10vw] md:gap-[12vw] lg:gap-[10vw] xl:gap-[8vw] 2xl:gap-[6vw] py-4 sm:py-40 md:py-60 relative mb-4 sm:mb-28"}>
      <SubtitleBackground/>
      {/* Strip 1 - awareness hooks (pain + solution) */}
      <div className="relative z-[100] w-screen">
        <div className="absolute w-[102vw] left-[-1vw] rotate-[-3deg] bg-primary h-16 overflow-hidden">
          <div className={"marquee-1 whitespace-nowrap"}>
            <div className={"flex gap-8 items-center h-full flex-shrink-0 min-w-max"}>
              <Strip1Items />
            </div>
            <div aria-hidden="true" className={"flex gap-8 items-center h-full flex-shrink-0 min-w-max"}>
              <Strip1Items />
            </div>
          </div>
        </div>
      </div>
      {/* Strip 2 - benefit reframes (time + money) */}
      <div className="relative z-[100] w-screen">
        <div className="absolute w-screen bg-primary h-16 overflow-hidden">
          <div className={"marquee-2 whitespace-nowrap"}>
            <div className={"flex gap-8 items-center h-full flex-shrink-0 min-w-max"}>
              <Strip2Items />
            </div>
            <div aria-hidden="true" className={"flex gap-8 items-center h-full flex-shrink-0 min-w-max"}>
              <Strip2Items />
            </div>
          </div>
        </div>
      </div>
      {/* Strip 3 - trust signals (security + credibility) */}
      <div className="relative z-[100] w-screen">
        <div className="absolute w-[102vw] right-[-1vw] rotate-[-3deg] bg-primary h-16 overflow-hidden">
          <div className={"marquee-1 whitespace-nowrap"}>
            <div className={"flex gap-8 items-center h-full flex-shrink-0 min-w-max"}>
              <Strip3Items />
            </div>
            <div aria-hidden="true" className={"flex gap-8 items-center h-full flex-shrink-0 min-w-max"}>
              <Strip3Items />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subtitle;
