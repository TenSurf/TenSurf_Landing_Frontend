import { type IPlan } from "../../../types/general.types";
import { Plan } from "./Plan";
import { Code2, FileJson, FileText, BookOpen } from "lucide-react";

export const PlansSection = (props: { data: IPlan[] }) => {
  return (
    <div
      id="Planss"
      className="flex flex-col gap-20 text-white w-full items-center relative z-10 scroll-m-20 max-w-screen-2xl min-h-screen my-16 sm:my-24 md:my-32 px-4 sm:px-8"
    >
      <div className="flex flex-col gap-6 text-center items-center w-full">
        <div className="text-4xl sm:text-5xl md:text-7xl font-semibold">Plans</div>
        <p className="text-lg text-gray-400 max-w-xl">
          Every plan includes the full generation pipeline: from plain English to compiled, backtest-ready NinjaScript.
        </p>
      </div>

      {/* Deliverables Block */}
      <div className="w-full max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          What you get with every strategy
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-sm font-semibold text-center">NinjaScript Code</div>
            <div className="text-xs text-gray-400 text-center">Complete .cs file — compiles and runs in NinjaTrader. No editing needed.</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <FileJson className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-sm font-semibold text-center">Configuration File</div>
            <div className="text-xs text-gray-400 text-center">All tunable parameters in one place — stop loss, take profit, indicator settings. Tweak and re-backtest without re-generating.</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-sm font-semibold text-center">Strategy Summary</div>
            <div className="text-xs text-gray-400 text-center">Quick overview of what your strategy does — review at a glance before backtesting.</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-orange-400" />
            </div>
            <div className="text-sm font-semibold text-center">Documentation</div>
            <div className="text-xs text-gray-400 text-center">Detailed reference guide — logic explained, parameters documented, usage instructions included.</div>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <div
          style={{
            opacity: "0.5",
            background: "#2561FF",
            filter: "blur(250px)",
          }}
          className="pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 absolute w-[492px] h-[468px] rounded-full"
        ></div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch pt-4">
          {props.data?.map((item: IPlan) => {
            const highlighted = item.title?.toLowerCase().includes("pro");
            return (
              <Plan
                key={item.order_id}
                className={
                  highlighted
                    ? "bg-gradient-to-b from-[#00115E] to-[#0424B5] border-[#082FDF]/60 shadow-[0_20px_60px_-20px_rgba(8,47,223,0.5)]"
                    : "bg-[#33415C]/20"
                }
                plan={item}
                isAnnuallyChecked={false}
              />
            );
          })}
        </div>
      </div>

    </div>
  );
};
