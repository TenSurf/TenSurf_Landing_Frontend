import React from "react";
import { ABOUT_US_SECTION } from "@/constatns/landingPage.constants";
import GsapProvider from "@/component/landing/GsapProvider";

const AboutUsSection = () => {

  return (
    <GsapProvider selector={".about-us-item"} fromVars={{ opacity: 0, y: 100 }} toVars={{
      opacity: 1, y: 0, duration: 1.5, scrollTrigger: {
        trigger: ".about-us-item",
        start: "center center"
      }
    }}>
      <div id={"AboutUs"} className="relative flex flex-col items-center gap-10 scroll-m-20 max-w-screen-2xl">
        <div className="text-3xl md:text-4xl lg:text-6xl font-semibold">{ABOUT_US_SECTION.title}</div>
        <ul className="list-disc flex items-start flex-col gap-16 lg:gap-12">
          {ABOUT_US_SECTION.items.map((item) => (
            <li key={item.title} className={"about-us-item"}>
              <p className={"text-xl md:text-2xl lg:text-3xl"}>
                <span className={"font-semibold"}>{item.title} : </span>
                <span className={"font-thin"}>{item.description}</span>
              </p>
            </li>
          ))}
        </ul>
        <h4 className={"text-2xl md:text-3xl lg:text-4xl mt-8"}>{ABOUT_US_SECTION.description}</h4>
      </div>
    </GsapProvider>

  );
};

export default AboutUsSection;