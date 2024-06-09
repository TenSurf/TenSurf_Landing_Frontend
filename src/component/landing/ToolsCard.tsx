import React from "react";
import ChatbotIcon from "@/icons/ChatbotIcon";
import ToolCard from "@/component/landing/ToolCard";

const ToolsCard = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-16 scroll-m-28 max-w-screen-2xl w-full">
      <div className={'flex flex-col items-center justify-center gap-12'}>
        <div className="bg-[#00041A] rounded-full p-2 flex gap-4 justify-between items-center">
          <div className="rounded-full p-3 bg-primary">
            <ChatbotIcon />
          </div>
          <p className={'text-lg font-normal px-2'}>Comprehensive Range of Tools</p>
        </div>
        <div className="flex flex-col gap-6 w-full items-center justify-center">
          <h2 className={'font-normal text-5xl'}>New Generation of Trading Tools</h2>
          <p className={'font-normal text-2xl max-w-[600px] text-center'}>Leverage AI Agents in TenSurf Brain to Unlock
            Institutional-Grade Trading Tools</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 grid-rows-1 gap-4 items-stretch">
          <ToolCard title={'Advanced Insights'} description={'Identify patterns, imbalances, anomalies, level reactions, statistics and limit order book directly on chart.'}/>
          <ToolCard title={'Strategy Automation'} description={'Automate and test trading strategies with ease by chatting with AI agents without any need for coding.'}/>
          <ToolCard className={'md:col-span-2 xl:col-span-1'} title={'Risk Manager'} description={'Prevent emotional or revenge trading by defining guardrails for your trading rules in a no-code chat interface.'}/>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <ToolCard className={''} title={'Conversational AI Assistants'} description={'Chat with the Market: Engage with the conversational interface to get real-time market analysis and high-impact news analysis on the chart. History Analysis: Utilize text or voice chat to analyze your trading patterns, chat with previous trades to gain insights, and pinpoint areas for improvement and untapped opportunities. Smart Agents: Ignite AI agents via text or voice chat to monitor market conditions and identify the best trade opportunities.'}/>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
            <ToolCard title={"Psychological Profiling"} description={"Receive alerts and reports for prevalent trading pitfalls based on speech analysis and facial emotion detection in real-time."}/>
            <ToolCard title={"Investment Advice"} description={"Stock analysis and investment suggestions by AI researchers based on EDGAR filings, financial news, and market trends."}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;