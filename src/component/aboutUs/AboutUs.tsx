// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
import React from "react";
import Image from "next/image";

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
      <div className="max-w-screen-2xl w-full flex-col md:gap-[200px]">

      </div>
    </div>
  );
};

export default AboutUs;