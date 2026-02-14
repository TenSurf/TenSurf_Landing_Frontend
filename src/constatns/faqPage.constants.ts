export const FAQ = {
  title: 'Frequently Asked Questions',
  description: 'Everything you need to know about TenSurf Brain'
};

export const FAQ_CATEGORIES = {
  general: 'General',
  strategyCreation: 'Strategy Creation',
  howItWorks: 'How It Works',
  pricing: 'Pricing & Billing',
  technical: 'Technical Requirements',
  support: 'Support'
};

export const FAQ_DATA = [
  {
    category: 'general',
    questions: [
      {
        question: 'What is TenSurf Brain?',
        answer: 'TenSurf Brain is an AI-powered strategy builder that runs as a native add-on inside NinjaTrader. It lets you create automated trading strategies by describing your rules in plain English—no coding required. The AI generates complete NinjaScript code and compiles it automatically. Your strategy is then ready to backtest directly in NinjaTrader.'
      },
      {
        question: 'How is TenSurf Brain different from ChatGPT?',
        answer: 'ChatGPT generates code outside NinjaTrader—you copy-paste it, then debug compilation errors yourself. TenSurf Brain runs inside NinjaTrader, compiles your code automatically, and catches errors before you see them. ChatGPT doesn\\t know NinjaTrader\\s current API and often generates deprecated methods. TenSurf Brain is trained specifically on NinjaScript and generates production-ready code that compiles on the first try.'
      },
      {
        question: 'Do I need programming experience?',
        answer: 'No. TenSurf Brain is designed specifically for traders who don\\t want to code. You describe your strategy in plain English, and our AI handles the NinjaScript programming.'
      },
      {
        question: 'Does TenSurf Brain work with other platforms besides NinjaTrader?',
        answer: 'Currently, TenSurf Brain is built exclusively for NinjaTrader. We\\ve designed it as a native add-on to provide the best possible integration with the NT8 platform.'
      },
      {
        question: 'Is my data secure?',
        answer: 'Yes. TenSurf Brain runs inside NinjaTrader on your computer. Your strategies are generated, compiled, and backtested locally. Your proprietary trading ideas never leave your machine.'
      }
    ]
  },
  {
    category: 'strategyCreation',
    questions: [
      {
        question: 'Will TenSurf Brain generate profitable strategies?',
        answer: 'TenSurf Brain is a code generation tool, not a signal provider—no tool can guarantee profitability. What it does: if you have a profitable rule-based trading idea, TenSurf Brain converts it into working NinjaScript code so you can backtest and validate it with your own historical data. You bring the trading edge; we handle the code. Developing consistently profitable strategies requires significant research, testing, and iteration—TenSurf Brain facilitates this path by removing the coding barrier so you can focus on refining your trading logic. Currently, TenSurf Brain supports technical analysis strategies including indicator-based entry and exit rules using RSI, MACD, Bollinger Bands, moving averages, and 100+ other NinjaTrader built-in indicators. In upcoming versions, we will add support for price action, volume profile, order flow, intermarket analysis, and ICT/smart money concepts. All existing subscribers receive free upgrades to new versions as they release.'
      },
      {
        question: 'What types of strategies can I create?',
        answer: 'TenSurf Brain supports rule-based strategies using technical indicators and price action. You can create entry and exit conditions based on any NinjaTrader built-in indicator, stop loss and take profit rules, position sizing rules, and multi-condition logic (AND/OR combinations).'
      },
      {
        question: 'What indicators are supported?',
        answer: 'All NinjaTrader built-in indicators are supported, including Moving Averages (SMA, EMA, WMA), Oscillators (RSI, MACD, Stochastic, CCI), Volatility indicators (Bollinger Bands, ATR), Volume indicators, and 100+ more.'
      },
      {
        question: 'Can I create strategies based on fundamental data or news?',
        answer: 'TenSurf Brain focuses on technical analysis and price action strategies. Fundamental data, news events, and sentiment analysis are not currently supported.'
      },
      {
        question: 'How complex can my strategies be?',
        answer: 'TenSurf Brain handles straightforward rule-based strategies well. If your strategy involves multiple entry conditions, tiered exits, or standard risk management, it will work. Extremely complex multi-timeframe or machine learning-based strategies may be outside the current scope.'
      },
      {
        question: 'Can I use custom indicators?',
        answer: 'Currently, TenSurf Brain works with NinjaTrader built-in indicators. Support for custom indicators is planned for a future release.'
      },
      {
        question: 'What\\s the difference between Strategy Surf, Indicator Surf, and Script Surf?',
        answer: 'TenSurf Brain has three tabs for different workflows. Strategy Surf lets you describe a complete trading strategy in plain English and generates the full NinjaScript code, configuration, and documentation. Indicator Surf lets you describe a custom indicator and generates the indicator code. Script Surf lets you paste existing NinjaScript code and describe changes you want—the AI modifies your code instead of writing from scratch. All three run inside NinjaTrader with automatic compilation.'
      }
    ]
  },
  {
    category: 'howItWorks',
    questions: [
      {
        question: 'How does the AI understand my strategy?',
        answer: 'Our AI is trained to interpret trading language and convert it into systematic rules. When you write "Buy when RSI crosses below 30," it understands you want a long entry when the RSI indicator\\s value moves from above 30 to below 30. It then generates the corresponding NinjaScript code.'
      },
      {
        question: 'What if the AI misunderstands my strategy?',
        answer: 'After you submit your description, TenSurf Brain shows you the interpreted rules before generating code. You can review, edit, and confirm before proceeding. This verification step ensures the strategy matches your intent.'
      },
      {
        question: 'What is the two-step process?',
        answer: 'TenSurf Brain uses a two-phase approach to protect your quota. Phase 1 (Submit) is free and instant—the AI converts your plain English rules into a standardized format so you can verify its interpretation. You can repeat this step as many times as you want at no cost. Phase 2 (Generate) only runs after you review and confirm the interpreted rules. This is the step that consumes your daily quota. The benefit: you catch misunderstandings before expensive code generation runs, so you never waste a generation on the wrong strategy.'
      },
      {
        question: 'What do I get with each generation?',
        answer: 'Every generation delivers four components, not just code. You receive: (1) NinjaScript Code—a complete .cs file ready to compile in NinjaTrader, (2) Configuration JSON—all tunable parameters (stop loss, take profit, indicator settings) in one place so you can tweak and re-backtest without re-generating, (3) Strategy Summary—a plain-English overview of what your strategy does, and (4) Documentation—a detailed reference guide explaining the logic, parameters, and usage instructions.'
      },
      {
        question: 'How does automatic backtesting work?',
        answer: 'After generating your strategy, TenSurf Brain compiles it using NinjaTrader\\s built-in compiler and runs a backtest using your local data. You\\ll see the results directly in NinjaTrader\\s Strategy Analyzer.'
      },
      {
        question: 'What if my strategy has a compilation error?',
        answer: 'TenSurf Brain automatically attempts to fix compilation errors. If an error occurs, the AI analyzes the issue and regenerates the code with corrections—up to 3 attempts. You\\re notified only if the issue can\\t be resolved.'
      },
      {
        question: 'Can I see and edit the generated code?',
        answer: 'Yes. TenSurf Brain shows you the complete NinjaScript code. You can review it, and if you\\re comfortable with code, you can modify it further in the NinjaScript Editor.'
      },
      {
        question: 'Can I use TenSurf Brain strategies for live trading?',
        answer: 'Yes. Once validated, the generated NinjaScript strategy can be deployed for live trading just like any other NinjaScript strategy. The code is production-ready.'
      }
    ]
  },
  {
    category: 'pricing',
    questions: [
      {
        question: 'Is there a free trial?',
        answer: 'Yes. You can try TenSurf Brain free for 7 days with full access to all features. No credit card required to start.'
      },
      {
        question: 'What\\s included in each plan?',
        answer: 'All plans include AI code generation, automatic compilation, and backtesting. The main difference is the number of strategies you can generate per day: Trial (3/day), Start Surf $39/mo (5/day), Pro Surf $99/mo (20/day), Ultra Surf $199/mo (50/day).'
      },
      {
        question: 'What counts as one strategy?',
        answer: 'Each time you generate a new strategy or make significant changes to an existing one, it counts toward your daily limit. Minor edits to the same strategy don\\t count as new.'
      },
      {
        question: 'Can I upgrade or downgrade anytime?',
        answer: 'Yes. Change your plan at any time. Upgrades take effect immediately. Downgrades take effect at the next billing cycle.'
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Yes. There are no contracts or commitments. Cancel anytime, and your subscription will remain active until the end of your billing period.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We offer a 7-day free trial so you can evaluate TenSurf Brain before paying. After subscribing, we don\\t offer refunds, but you can cancel anytime.'
      },
      {
        question: 'Do you offer annual billing?',
        answer: 'Yes. Save 20% with annual billing. Annual plans are billed once per year.'
      }
    ]
  },
  {
    category: 'technical',
    questions: [
      {
        question: 'What do I need to run TenSurf Brain?',
        answer: 'You need NinjaTrader (version 8.1.5 or later), Windows 10 or Windows 11 (64-bit), an active internet connection for AI processing, and a data feed connected to NinjaTrader (for backtesting).'
      },
      {
        question: 'Does TenSurf Brain slow down NinjaTrader?',
        answer: 'No. TenSurf Brain is designed to run efficiently in the background. Strategy generation and validation happen without interrupting your normal trading activities.'
      },
      {
        question: 'How do I install TenSurf Brain?',
        answer: 'After signing up, you\\ll receive a download link for the TenSurf Brain add-on. Place the file in your NinjaTrader add-ons folder, restart NinjaTrader, and access TenSurf Brain from the Control Center menu.'
      },
      {
        question: 'Does TenSurf Brain require an always-on internet connection?',
        answer: 'An internet connection is required during strategy generation (for AI processing). Once your strategy is compiled, it runs locally in NinjaTrader without needing a connection.'
      }
    ]
  },
  {
    category: 'support',
    questions: [
      {
        question: 'How do I get help?',
        answer: 'Email support is included with all plans. Pro Surf and Ultra Surf subscribers receive priority support with faster response times. Visit our Help Center for documentation, tutorials, and common troubleshooting steps.'
      },
      {
        question: 'Where can I learn more about using TenSurf Brain?',
        answer: 'We provide a Getting Started guide (included with your account), video tutorials, documentation for all features, and example strategies to learn from.'
      },
      {
        question: 'What if I have a feature request?',
        answer: 'We welcome feedback! Email us at support@tensurf.ai with your suggestions. We regularly add features based on user requests.'
      }
    ]
  }
];
