import React from "react";
import Image from "next/image";
import AboutUsItem from "@/component/aboutUs/AboutUsItem";

export const AboutUs = () => {
  return (
    <div className="flex flex-col w-full gap-16 sm:gap-24 mt-24 sm:mt-32 md:mt-44 mb-24 sm:mb-32">
      <h1 className={"text-4xl sm:text-5xl md:text-7xl font-medium text-center"}>About Us</h1>
      <div className="container mx-auto">
        <div className="relative w-full max-w-screen-xl mx-auto h-[260px] sm:h-[360px] md:h-[440px] rounded-3xl overflow-hidden">
          <Image src={"/images/about-us.png"} className={"object-cover"} alt={"About TenSurf"} fill priority />
        </div>
      </div>
      <div className="container w-full mx-auto flex flex-col gap-20 sm:gap-28 lg:gap-36">
        <AboutUsItem
          title={"Born from Passion, Driven by Innovation"}
          description={"We built TenSurf Brain to solve a simple problem: traders have great ideas but no way to code them. Our AI-powered add-on runs inside NinjaTrader, turning plain English trading rules into production-ready strategies — complete with code, configuration, and documentation."}
          direction={"left"} image={"/images/about-us-1.png"}
        />
        <AboutUsItem
          title={"TenSurf Brain: Your AI Advantage"}
          description={"TenSurf was founded by traders and engineers who saw the gap between trading knowledge and coding ability. Our AI understands NinjaScript — so you don\'t have to. Describe your strategy, review the interpreted rules for free, and generate working code in minutes."}
          direction={"right"}
          image={"/images/about-us-2.png"}
        />
        <AboutUsItem
          title={"Democratizing Trading"}
          description={"We believe every trader deserves the ability to automate their ideas. TenSurf\'s mission is to eliminate the coding barrier — so your edge comes from your trading knowledge, not your programming skills."}
          direction={"left"}
          image={"/images/about-us-3.png"}
        />
      </div>
    </div>
  );
};

export default AboutUs;
