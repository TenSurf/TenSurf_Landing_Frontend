import React from "react";
import { cn } from "@/lib/utils";
import ToolCardTitleIcon from "@/icons/ToolCardTitleIcon";

const ToolCard = ({ title, description , className}: { title: string, description: string , className?: string}) => {
  return (
    <div
      className={cn("bg-[url('/images/toolCardBg.png')] bg-cover transition-all duration-500 group hover:scale-[1.03] items-start rounded-3xl bg-[#00041A] w-full flex flex-col justify-center py-8 px-10 gap-6 border-[1px] border-[#FFFFFF]/5 overflow-hidden z-10 relative after:transition-all after:duration-500 after:contents[''] after:z-0 after:absolute after:inset-0 after:opacity-0 after:bg-gradient-to-r after:from-[#8032FF]/15 from-20% after:to-[#00041A]/20 backdrop-blur-3xl hover:after:opacity-100" , className)}>
      <div className="flex gap-4">
        <div className="transition-all duration-500 w-fit h-fit group-hover:rotate-[2turn]">
          <ToolCardTitleIcon className={'transition-all duration-500 group-hover:stroke-[#B07FFF] group-hover:drop-shadow-[0px_2px_3px_#B07FFF]'}/>
        </div>
        <h4 className={"font-normal text-3xl z-10"}>{title}</h4>
      </div>
      <p className={"text-xl font-normal z-10"}>{description}</p>
    </div>
  );
};

export default ToolCard;