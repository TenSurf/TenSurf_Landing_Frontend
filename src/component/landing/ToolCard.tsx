import React from "react";
import { cn } from "@/lib/utils";

const ToolCard = ({ title, description , className}: { title: string, description: string , className?: string}) => {
  return (
    <div
      className={cn("items-start rounded-3xl bg-[#00041A] w-full flex flex-col justify-center py-8 px-10 gap-6 border-[1px] border-black" , className)}>
      <h4 className={"font-normal text-3xl"}>{title}</h4>
      <p className={"text-xl font-normal"}>{description}</p>
    </div>
  );
};

export default ToolCard;