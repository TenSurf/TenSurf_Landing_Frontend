// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
import React from "react";
import Image from "next/image";
import AboutUsItem from "@/component/aboutUs/AboutUsItem";

export const AboutUs = () => {
  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div
      className="flex flex-col w-full gap-[120px] mt-44 mb-[200px]">
      <h1 className={"text-5xl md:text-7xl font-medium text-center"}>About Us</h1>
      <div className="relative w-full pb-[75vh] overflow-visible">
        <div
          className="absolute w-screen bg-[url('/images/subtitleBackground.svg')] bg-no-repeat bg-cover h-[200vh] bottom-0">
        </div>
        <Image src={"/images/about-us.png"} className={"2xl:rounded-3xl max-w-screen-2xl mx-auto"} objectFit={"cover"}
               alt={"About Us"} fill />
      </div>
      <div className="container w-full mx-auto flex-col md:gap-[200px]">
        <AboutUsItem
          className={'mb-48 lg:mb-96'}
          title={"Born from Passion, Driven by Innovation"}
          description={"We built TenSurf Brain to solve a simple problem: traders have great ideas but no way to code them. Our AI-powered add-on runs inside NinjaTrader, turning plain English trading rules into production-ready strategies — complete with code, configuration, and documentation."}
          direction={"left"} image={"/images/about-us-1.png"}
        />
        <AboutUsItem
          className={'mb-48 lg:mb-96'}
          title={"TenSurf Brain: Your AI Advantage"}
          description={"TenSurf was founded by traders and engineers who saw the gap between trading knowledge and coding ability. Our AI understands NinjaScript — so you don\'t have to. Describe your strategy, review the interpreted rules for free, and generate working code in minutes."}
          direction={"right"}
          image={"/images/about-us-2.png"}
        />
        <AboutUsItem
          className={'mb-16'}
          title={"Democratizing Trading"}
          description={"We believe every trader deserves the ability to automate their ideas. TenSurf\'s mission is to eliminate the coding barrier — so your edge comes from your trading knowledge, not your programming skills."}
          direction={"left"}
          image={"/images/about-us-3.png"}
        />
      </div>
    </div>
  );
};

export default AboutUs;