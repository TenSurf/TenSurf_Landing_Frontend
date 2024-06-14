import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ToolItem = () => {
  return (
    <div className="mx-auto w-2/3 xl:w-full grid grid-cols-1 xl:grid-cols-3 items-end justify-between xl:pr-32 lg:gap-6 2xl:gap-32 py-1">
      <div className="xl:col-span-1 flex flex-col gap-8 justify-start order-2 xl:order-1">
        <h3 className={"text-5xl font-normal leading-tight"}>Advanced Trading Insights by chatting with TenSurf
          Brain</h3>
        <p className={"text-[#ADB5BD] text-lg line-clamp-4 font-extralight"}>
          TenSurf Brain is an artificial intelligence-powered chatbot designed to provide traders
          with advanced tools for enhancing their trading strategies. You can interact with this AI
          chatbot via both voice and text chat to access features such as trend detection and
          support/resistance analysis, which help you visually identify key price levels on charts
          for informed entry and exit decisions. Additionally, TenSurf Brain calculates precise stop
          loss and take profit levels to aid in robust risk management. It also evaluates trading
          biases to recommend whether to look for long or short positions, giving you strategic
          insights into various financial instruments. Plus, you can give YouTube videos directly
        </p>
        <Link href={""}>
          <Button className={"text-[#ADB5BD] border-[#ADB5BD] flex gap-2 rounded-full py-8 bg-transparent w-fit"}
                  variant={"outline"}>
            <p className={"text-xl font-semibold"}>Learn More</p>
            <ArrowRight size={20} strokeWidth={2} />
          </Button>
        </Link>
      </div>
      <div className="xl:col-span-2 relative pb-[68%] order-1 xl:order-2">
        <Image src={"/images/tools/Ipad1.png"} fill alt={"tool name"} loading={"lazy"} className={"w-full"} />
      </div>
    </div>
  );
};

export default ToolItem;