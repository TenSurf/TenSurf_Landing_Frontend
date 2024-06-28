import React from "react";
import ChatbotIcon from "@/icons/ChatbotIcon";

const RoundTitleHeader = ({title}: {title: string}) => {
  return (
    <div className="bg-[#00041A] rounded-full p-2 flex gap-4 justify-between items-center">
      <div className="rounded-full p-3 bg-primary">
        <ChatbotIcon />
      </div>
      <p className={"text-lg font-normal px-2"}>
        {title}
      </p>
    </div>
  );
};

export default RoundTitleHeader;