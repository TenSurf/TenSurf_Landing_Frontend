import { TOOLS } from "@/constatns/tools.constants";
import { GradientShape } from "@/component/general/GradientShape";
import React from "react";
import ToolCard from "@/component/landing/tools/ToolCard";
import ToolsHeader from "@/component/tools/ToolsHeader";
import ToolSummery from "@/component/tools/ToolSummery";


const Tools = (
  {
    params,
    searchParams
  }: {
    params: { tool: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) => {

  return (
    <div className="flex flex-col gap-10  my-[120px] max-w-screen-xl px-8 lg:px-0">
      <div className="flex flex-col gap-2">
        <ToolsHeader header={TOOLS[params.tool]?.header} title={TOOLS[params.tool]?.title}
                     description={TOOLS[params.tool]?.description} />
      </div>
      <h3 className={'text-5xl underline font-bold mb-16 text-center'}>{TOOLS[params.tool].detailDescriptionTitle}</h3>
      <div className="flex flex-col gap-36 relative z-20 w-full items-center mt-14">
        {TOOLS[params.tool]?.items.map((item: any, index: number) => (
          <ToolCard key={item.title} direction={index % 2 == 0 ? "left" : "right"} image={item.image}
                    imageAlt={item.title}>
            <div className="flex flex-col gap-4">
              <h3 className={"text-2xl md:text-3xl lg:text-4xl font-bold"}>{item.title}</h3>
              <p className={"text-lg md:text-xl lg:text-2xl font-light"}>{item.description}</p>
              <ul className={"list-disc flex flex-col gap-2"}>
                {item.list.map((item: any) => (
                  <li key={item.title}>
                    <p className={"text-lg font-light"}><span
                      className={"font-extrabold"}>{item.title} :</span>{item.description}</p>
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
      <ToolSummery title={TOOLS[params.tool]?.footer?.title} description={TOOLS[params.tool]?.footer?.description}/>
    </div>
  );
};

export default Tools;