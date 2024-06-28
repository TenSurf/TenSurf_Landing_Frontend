import { TOOLS } from "@/constatns/tools.constants";
import { GradientShape } from "@/component/general/GradientShape";
import React from "react";
import ToolCard from "@/component/landing/tools/ToolCard";
import ToolsHeader from "@/component/tools/ToolsHeader";
import ToolSummery from "@/component/tools/ToolSummery";
import { HeroSection } from "@/component/landing/heroSection/HeroSection";
import RoundTitleHeader from "@/component/landing/toolsV2/RoundTitleHeader";


const Tools = (
  {
    params,
    searchParams
  }: {
    params: { tool: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) => {

  return (
    <div className="flex flex-col gap-10 max-w-screen-xl px-8 lg:px-0">
      <div
        style={{
          opacity: "0.8",
          background: "#062ACA",
          filter: "blur(170px)"
        }}
        className="z-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[250px] h-[250px] rounded-full"
      ></div>
      <HeroSection title={TOOLS[params.tool]?.header} description={TOOLS[params.tool]?.description} />
      <div className="relative flex flex-col gap-10 mb-44">
        <div
          style={{
            opacity: "0.8",
            background: "#062ACA",
            filter: "blur(200px)"
          }}
          className="z-0 absolute top-24 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] rounded-full"
        ></div>
        <div className="relative w-fit mx-auto">
          <RoundTitleHeader title={TOOLS[params.tool]?.title} />
        </div>
        <h3 className={'relative text-5xl font-normal mb-16 text-center'}>{TOOLS[params.tool].detailDescriptionTitle}</h3>
        <div className="flex flex-col gap-36 relative z-20 w-full items-center mt-14">
          {TOOLS[params.tool]?.items.map((item: any, index: number) => (
            <ToolCard scope={`item-${index}`} key={item.title} direction={index % 2 == 0 ? "left" : "right"} image={item.image}
                      imageAlt={item.title}>
              <div className="flex flex-col gap-4">
                <h3 className={"text-xl md:text-2xl lg:text-3xl font-bold"}>{item.title}</h3>
                <p className={"text-lg md:text-xl lg:text-2xl font-light"}>{item.description}</p>
                <ul className={"flex flex-col gap-2"}>
                  {item.list.map((item: any) => (
                    <li key={item.title}>
                      <p className={"text-lg font-light"}>
                        <span
                          className={"font-extrabold"}>{item.title} :
                        </span>
                        {item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ToolCard>
          ))}
          <div className="absolute z-10 top-[20%] left-[50%] translate-x-[50%] w-full scale-[400%]">
            <GradientShape />
          </div>
        </div>
        <ToolSummery title={TOOLS[params.tool]?.footer?.title} description={TOOLS[params.tool]?.footer?.description} />
      </div>
    </div>
  );
};

export default Tools;