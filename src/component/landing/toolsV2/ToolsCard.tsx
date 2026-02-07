import React from "react";
import ToolCard from "@/component/landing/toolsV2/ToolCard";
import GsapAnimation from "@/utils/GsapAnimation";
import RoundTitleHeader from "@/component/landing/toolsV2/RoundTitleHeader";

const ToolsCard = () => {
  return (
    <div
      id="tools"
      className="relative overflow-visible flex flex-col justify-center items-center gap-16 scroll-m-28 max-w-screen-2xl w-full my-12 pt-12"
    >
      <GsapAnimation fromVars={{y: 400}} toVars={{y: 0 , duration: 1 , scrollTrigger: {start: "top bottom" , trigger: "#toolsCardHeader"}}} selector={"#toolsCardHeader"}>
        <div id={'toolsCardHeader'} className={"z-10 flex flex-col items-center justify-center gap-12"}>
          <RoundTitleHeader title={'AI Strategy Builder'}/>
          <div className="flex flex-col gap-6 w-full items-center justify-center">
            <h2 className={"font-normal text-5xl text-center text-[#E9ECEF]"}>
              Everything You Need to Automate
            </h2>
            <p className={"font-normal text-2xl max-w-[700px] text-center text-[#ADB5BD]"}>
              From plain English to compiled code—TenSurf Brain generates your strategy inside NinjaTrader
            </p>
          </div>
        </div>
      </GsapAnimation>

      <GsapAnimation selector={"#toolsCard"} fromVars={{ y: 300 }} toVars={{y: 0 , duration: 1 , scrollTrigger: {start: "top bottom" , trigger: "#toolsCardHeader"}}}>
        <div className="z-10 w-full flex flex-col gap-4" id={'toolsCard'}>
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4 items-stretch">
            <ToolCard
              title={"Natural Language Input"}
              description={
                "Describe your strategy like you'd explain it to a fellow trader. \"Buy when RSI crosses below 30\" is all you need to write."
              }
            />
            <ToolCard
              title={"AI Code Generation"}
              description={
                "Our AI interprets your rules and generates four deliverables: production-ready NinjaScript code, a configuration file, a strategy summary, and full documentation."
              }
            />
            <ToolCard
              className={"md:col-span-2 xl:col-span-1"}
              title={"Automatic Compilation"}
              description={
                "No more syntax errors. TenSurf Brain compiles your strategy directly in NinjaTrader and fixes issues automatically."
              }
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <ToolCard
              className={""}
              title={"Backtest-Ready Output"}
              description={
                "Your generated strategy is ready to backtest immediately in NinjaTrader. No exports, no manual setup—just generate and test using your own historical data, all on your machine."
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
              <ToolCard
                title={"100+ Indicators Supported"}
                description={
                  "Use any NinjaTrader built-in indicator—RSI, MACD, Bollinger Bands, moving averages, and dozens more. Combine them however you want."
                }
              />
              <ToolCard
                title={"Tweak Without Regenerating"}
                description={
                  "Every strategy includes a separate config file with your indicator settings, stop loss, and take profit values. Adjust parameters and re-backtest instantly — no need to burn another generation."
                }
              />
            </div>
          </div>

          {/* Free tier clarification */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-3 bg-[#082FDF]/10 border border-[#082FDF]/30 rounded-full px-6 py-3">
              <span className="text-[#E9ECEF]">
                <span className="font-medium">Free trial includes:</span> All premium features for 7 days
              </span>
            </div>
          </div>
        </div>
      </GsapAnimation>
      <div
        style={{
          opacity: "0.8",
          background:
            "radial-gradient(circle, rgba(37,97,255,0.5) 0%, rgba(1,3,11,1) 100%)",
          filter: "blur(200px)",
        }}
        className="z-0 absolute w-[500px] top-0 h-[500px] rounded-full"
      ></div>
    </div>
  );
};

export default ToolsCard;
