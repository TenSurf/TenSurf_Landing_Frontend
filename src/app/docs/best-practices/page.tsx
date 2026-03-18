import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Practices | TenSurf Brain Docs",
  description:
    "Tips for writing better trading strategies with TenSurf Brain. Get the most out of AI-powered strategy generation.",
};

export default function BestPracticesPage() {
  const practices = [
    {
      title: "Be Specific with Entry and Exit Conditions",
      description:
        "Instead of \"enter when RSI is low\", write \"enter long when RSI(14) crosses below 30\". Specific conditions produce better code.",
      good: "Enter long when RSI(14) crosses below 30 and price is above SMA(200)",
      bad: "Enter when RSI is low and trend is up",
    },
    {
      title: "Always Define Risk Management",
      description:
        "Every strategy should have stop loss and take profit rules. Without them, a single bad trade can wipe out gains.",
      good: "Stop loss 20 ticks below entry, take profit 40 ticks above entry",
      bad: "No stop loss defined (relying on exit rules only)",
    },
    {
      title: "Use Indicator References (@INDICATOR_N)",
      description:
        "When using the Strategy Builder, reference indicators by their assigned number. This helps the AI map your rules to the correct indicator instances.",
      good: "Enter long when @INDICATOR_1 crosses above @INDICATOR_2",
      bad: "Enter long when the fast moving average crosses above the slow one",
    },
    {
      title: "Start Simple, Then Add Complexity",
      description:
        "Begin with 1-2 indicators and simple entry/exit rules. Once that works, add filters, multiple timeframes, or additional conditions.",
      good: "Start with SMA crossover, then add RSI filter",
      bad: "First strategy uses 6 indicators with complex conditional logic",
    },
    {
      title: "Test on Multiple Instruments and Timeframes",
      description:
        "A strategy that works on ES 5-minute charts may fail on NQ 1-minute charts. Always backtest across different conditions.",
    },
    {
      title: "Review the SSR Before Generating Code",
      description:
        "After submitting, review the Standardized Strategy Rules (SSR) output. This is your chance to catch misinterpretations before code generation.",
    },
    {
      title: "Use the Chat for Complex Strategies",
      description:
        "For strategies with many conditions or nuanced logic, describe them conversationally in the Chat panel. The AI can ask clarifying questions.",
    },
    {
      title: "Keep Stop Losses Reasonable",
      description:
        "Extremely tight stops (2-3 ticks) will get stopped out by noise. Extremely wide stops (100+ ticks) risk large losses. Match your stop to the instrument\u0027s volatility.",
    },
  ];

  return (
    <article>
      <h1 className="text-3xl sm:text-4xl font-medium text-[#E9ECEF] mb-4">
        Best Practices
      </h1>
      <p className="text-lg text-[#ADB5BD] mb-12">
        Write better strategies and get more accurate code generation.
      </p>

      <div className="space-y-8">
        {practices.map((p, i) => (
          <div
            key={i}
            className="border border-[#1a1a2e] rounded-xl p-6 hover:border-[#082FDF]/30 transition-colors"
          >
            <h3 className="text-lg font-medium text-[#E9ECEF] mb-2">
              {p.title}
            </h3>
            <p className="text-[#ADB5BD] text-sm leading-relaxed mb-4">
              {p.description}
            </p>
            {p.good && (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 bg-[#0a2e0a]/30 border border-green-900/40 rounded-lg p-3">
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                    Good
                  </span>
                  <p className="text-sm text-[#ADB5BD] mt-1">{p.good}</p>
                </div>
                {p.bad && (
                  <div className="flex-1 bg-[#2e0a0a]/30 border border-red-900/40 rounded-lg p-3">
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                      Avoid
                    </span>
                    <p className="text-sm text-[#ADB5BD] mt-1">{p.bad}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
