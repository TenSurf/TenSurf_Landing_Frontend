import React, { forwardRef } from "react";
import { OFFERING_SECTION } from "@/constatns/landingPage.constants";
import { GradientShape } from "@/component/general/GradientShape";
import ToolItem from "@/component/landing/tools/ToolItem";

const OfferingSectionV2 = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col gap-10 text-white w-full items-center max-w-screen-2xl"
    >
      <div className="flex flex-col gap-4 text-center">
        <div className="text-3xl md:text-4xl lg:text-6xl font-semibold">
          {OFFERING_SECTION.title}
        </div>
        {/*<div className='text-md md:text-2xl'>{OFFERING_SECTION.description}</div>*/}
      </div>
      <div className="flex flex-col gap-36 relative z-20 w-full items-center">
        <ToolItem
          direction={"left"}
          name={"TenSurf Brain"}
          image={"/images/LevelSurf-1.png"}
          imageAlt={"LevelSurf"}
          title={"Advanced Trading Insights by chatting with TenSurf Brain"}
          description={
            "TenSurf Brain is an artificial intelligence-powered chatbot designed to provide traders with advanced tools for enhancing their trading strategies. You can interact with this AI chatbot via both voice and text chat to access features such as trend detection and support/resistance analysis, which help you visually identify key price levels on charts for informed entry and exit decisions. Additionally, TenSurf Brain calculates precise stop loss and take profit levels to aid in robust risk management. It also evaluates trading biases to recommend whether to look for long or short positions, giving you strategic insights into various financial instruments. Plus, you can give YouTube videos directly to TenSurf Brain to receive concise summaries of the trading strategies discussed, further enhancing your learning and application of new trading techniques."
          }
          quote={
            "“By automating the majority of steps related to patient follow-ups, Rad AI removes those manual tasks from our clinical team and gives them back more time to focus on caring for their patients.”"
          }
          user={"/images/aaron korbs.jpg"}
          userAlt={"Aaron Korbs"}
          userCompany={"/images/company.png"}
          userCompanyAlt={"company"}
          link={"#"}
          userJob={"Aaron Korbs position"}
          userName={"Aaron Korbs"}
        />
        <ToolItem
          direction={"right"}
          name={"ChartSurf "}
          image={"/images/LevelSurf-1.png"}
          imageAlt={"LevelSurf"}
          title={"Automated Key Levels and Event Insights in ChartSurf"}
          description={
            "ChartSurf is an advanced charting tool within TenSurf Hub that incorporates a range of analytical features to support effective trading. It includes tools for identifying delta and footprint imbalances, trend analysis, and displaying major order flow levels for various assets. It also provides insights into key market levels like initial balance, previous session highs/lows, and overnight session extremes, alongside volume profile and VWAP levels to pinpoint key trading levels. Additionally, ChartSurf automatically calculates and visualizes support/resistance (S/R) levels, using our proprietary machine learning algorithm, to aid traders in making strategic decisions regarding entry and exit points. This S/R tool identifies and visualizes key support and resistance levels where prices historically reverse or stall, helping traders determine entry and exit points and assess trend strength. Furthermore, ChartSurf features automatic display of price breaking the key levels or holding them based on market typical rotation size, offering a comprehensive solution for analyzing and responding to market rapid dynamics."
          }
          quote={
            "“By automating the majority of steps related to patient follow-ups, Rad AI removes those manual tasks from our clinical team and gives them back more time to focus on caring for their patients.”"
          }
          user={"/images/aaron korbs.jpg"}
          userAlt={"Aaron Korbs"}
          userCompany={"/images/company.png"}
          userCompanyAlt={"company"}
          link={"#"}
          userJob={"Aaron Korbs position"}
          userName={"Aaron Korbs"}
        />
        <ToolItem
          direction={"left"}
          name={"WidgetSurf"}
          image={"/images/LevelSurf-1.png"}
          imageAlt={"LevelSurf"}
          title={"Data-driven Insights with WidgetSurf"}
          description={
            "WidgetSurf integrates a diverse range of widgets for comprehensive market analysis and trading strategy optimization. It includes TrendSurf for tracking short-term and long-term trends, GapSurf for analyzing price gaps, WaveSurf for getting typical market volatility measures, PairSurf for understanding market correlations, LiqSurf for order book analysis, TimeSurf for analyzing market behavior around news events, and StatSurf for statistical analysis of price events on key levels. Especifically, StatSurf provides insights into the probability of breaking or retesting key market levels based on the scenario present in the current session, utilizing historical data. These tools collectively empower traders with valuable insights and data-driven decision-making capabilities."
          }
          quote={
            "“By automating the majority of steps related to patient follow-ups, Rad AI removes those manual tasks from our clinical team and gives them back more time to focus on caring for their patients.”"
          }
          user={"/images/aaron korbs.jpg"}
          userAlt={"Aaron Korbs"}
          userCompany={"/images/company.png"}
          userCompanyAlt={"company"}
          link={"/tools/WidgetSurf"}
          userJob={"Aaron Korbs position"}
          userName={"Aaron Korbs"}
        />
        <div className="absolute -z-10 top-[20%] left-[50%] -translate-x-[50%] w-full scale-[400%]">
          <GradientShape />
        </div>
      </div>
    </div>
  );
});

OfferingSectionV2.displayName = "OfferingSectionV2";

export default OfferingSectionV2;
