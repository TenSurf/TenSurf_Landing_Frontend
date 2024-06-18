// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
import React from "react";
import Image from "next/image";
import AboutUsIcon from "@/icons/AboutUsIcon";
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
        <Image src={"/images/about-us.png"} className={'2xl:rounded-3xl max-w-screen-2xl mx-auto'} objectFit={"cover"} alt={"About Us"} fill />
      </div>
      <div className="container w-full mx-auto flex-col md:gap-[200px]">
        <AboutUsItem/>
      </div>
    </div>
  );
};

export default AboutUs;