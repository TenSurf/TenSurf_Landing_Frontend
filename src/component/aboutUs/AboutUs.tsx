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
          description={"We built a cutting-edge trading platform powered by TenSurf Brain, a suite of AI, ML, and data science tools. This translates to sophisticated analytics, robust risk management, and personalized assistance – all designed to elevate your trading experience."}
          direction={"left"} image={"/images/about-us-1.png"}
        />
        <AboutUsItem
          className={'mb-48 lg:mb-96'}
          title={"TenSurf Brain: Your AI Advantage"}
          description={"TenSurf was founded by a team of industry veterans and technology enthusiasts with a shared vision (empower traders of all levels with the tools and insights needed to thrive in today markets)."}
          direction={"right"}
          image={"/images/about-us-2.png"}
        />
        <AboutUsItem
          className={'mb-16'}
          title={"Democratizing Trading"}
          description={"We believe powerful trading tools shouldn be a privilege for the few. TenSurf mission is to level the playing field, providing everyone with the resources they need to succeed."}
          direction={"left"}
          image={"/images/about-us-3.png"}
        />
      </div>
    </div>
  );
};

export default AboutUs;