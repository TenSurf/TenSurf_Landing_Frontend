import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started | TenSurf Brain Docs",
  description:
    "Learn how to set up TenSurf Brain and create your first automated trading strategy for NinjaTrader 8.",
};

export default function GettingStartedPage() {
  return (
    <article className="prose-docs">
      <h1 className="text-3xl sm:text-4xl font-medium text-[#E9ECEF] mb-4">
        Getting Started
      </h1>
      <p className="text-lg text-[#ADB5BD] mb-12">
        Go from zero to your first automated trading strategy in minutes.
      </p>

      {/* Step 1 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#082FDF] text-white text-sm font-bold">
            1
          </span>
          <h2 className="text-xl font-medium text-[#E9ECEF]">
            Install the NinjaTrader 8 Add-on
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-[#ADB5BD] leading-relaxed">
          <p>
            Open NinjaTrader 8 and go to{" "}
            <code className="bg-[#0a0a1f] px-2 py-0.5 rounded text-[#E9ECEF] text-sm">
              Tools &rarr; Import &rarr; NinjaScript Add-On
            </code>
            . Select the TenSurf Brain TBCSAD add-on file and import it.
          </p>
          <p>
            Once imported, open the TenSurf Brain panel from the NT8 menu. Click
            &quot;Connect&quot; to link your desktop client with the TenSurf Brain cloud.
          </p>
        </div>
      </section>

      {/* Step 2 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#082FDF] text-white text-sm font-bold">
            2
          </span>
          <h2 className="text-xl font-medium text-[#E9ECEF]">
            Describe Your Strategy
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-[#ADB5BD] leading-relaxed">
          <p>
            Open the TenSurf Brain web app. You can either use the{" "}
            <strong className="text-[#E9ECEF]">Chat</strong> panel to describe your
            strategy in natural language, or use the{" "}
            <strong className="text-[#E9ECEF]">Strategy Builder</strong> panel to
            fill in indicators, entry/exit rules, and risk management fields.
          </p>
          <div className="bg-[#00041A] border border-[#1a1a2e] rounded-xl p-4 my-4">
            <p className="text-sm font-medium text-[#E9ECEF] mb-2">Example:</p>
            <p className="text-sm italic">
              &quot;Enter long when RSI(14) drops below 30 and price is above SMA(200).
              Exit when RSI rises above 70. Use a 20-tick stop loss and 40-tick
              take profit.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#082FDF] text-white text-sm font-bold">
            3
          </span>
          <h2 className="text-xl font-medium text-[#E9ECEF]">
            Submit &amp; Generate Code
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-[#ADB5BD] leading-relaxed">
          <p>
            Click <strong className="text-[#E9ECEF]">Submit</strong> to validate
            your rules. TenSurf Brain converts your plain English into a
            Standardized Strategy Rules (SSR) format. Review the SSR to confirm the
            AI understood your intent.
          </p>
          <p>
            Then click <strong className="text-[#E9ECEF]">Generate Code</strong>.
            Our multi-agent AI system produces production-ready NinjaScript C# code
            with entry/exit logic, risk management, and indicator configuration.
          </p>
        </div>
      </section>

      {/* Step 4 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#082FDF] text-white text-sm font-bold">
            4
          </span>
          <h2 className="text-xl font-medium text-[#E9ECEF]">
            Deploy &amp; Backtest
          </h2>
        </div>
        <div className="pl-11 space-y-3 text-[#ADB5BD] leading-relaxed">
          <p>
            If NinjaTrader 8 is connected (green dot in the sidebar), click{" "}
            <strong className="text-[#E9ECEF]">Deploy to NT8</strong> to push the
            strategy directly into your NinjaTrader instance. The strategy is
            compiled automatically.
          </p>
          <p>
            Open NT8&apos;s Strategy Analyzer, select your new strategy, and run a
            backtest on your preferred instrument and time range.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-[#00041A] border border-[#1a1a2e] rounded-xl p-6 mt-8">
        <h3 className="text-lg font-medium text-[#E9ECEF] mb-3">Quick Tips</h3>
        <ul className="space-y-2 text-[#ADB5BD] text-sm list-disc pl-5">
          <li>
            Use <kbd className="bg-[#0a0a1f] border border-[#1a1a2e] px-1.5 py-0.5 rounded text-xs text-[#E9ECEF]">Cmd+K</kbd> to open the command palette and quickly search conversations.
          </li>
          <li>
            Reference indicators with <code className="bg-[#0a0a1f] px-1.5 py-0.5 rounded text-xs text-[#E9ECEF]">@INDICATOR_N</code> in the Strategy Builder fields.
          </li>
          <li>
            Use the &quot;Mirror Long to Short&quot; button to auto-generate opposite-direction rules.
          </li>
          <li>
            Press <kbd className="bg-[#0a0a1f] border border-[#1a1a2e] px-1.5 py-0.5 rounded text-xs text-[#E9ECEF]">?</kbd> anywhere in the app to see all keyboard shortcuts.
          </li>
        </ul>
      </section>
    </article>
  );
}
