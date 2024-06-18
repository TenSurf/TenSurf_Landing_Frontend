export const TOOLS:{[key:string]: any} = {
  "WidgetSurf": {
    title: "WidgetSurf",
    header: "Data-driven Insights with WidgetSurf",
    description: "WidgetSurf integrates a diverse range of widgets for comprehensive market analysis and trading strategy optimization. Each widget provides specific insights and analytical capabilities to enhance trading decisions, collectively empowering traders with valuable insights and data-driven decision-making capabilities.",
    detailDescriptionTitle: "Detailed Descriptions of WidgetSurf Tools:",
    items: [
      {
        title: "TrendSurf",
        description: "TrendSurf offers comprehensive market trend analysis, showcasing both short-term and long-term trends.",
        image: "/images/tools/TrendSurf.png",
        list: [
          {
            title: "Short-term trends",
            description: "Tracks trends from the past hour, the current trading session, and overnight activities, helping traders understand immediate market dynamics."
          },
          {
            title: "Long-term trends",
            description: "Analyzes trends from the previous session, the past week, and the past month, enabling a thorough understanding of market movements over extended periods. This dual perspective allows traders to make well-informed decisions by understanding market behavior across various timeframes."
          }
        ]
      },
      {
        title: "GapSurf",
        description: "GapSurf focuses on identifying and analyzing price gaps in the market.",
        image: "/images/tools/GapSurf.png",
        list: [
          {
            title: "Price Gap Analysis",
            description: "Evaluates the likelihood of gaps being filled based on historical data, providing statistical insights."
          },
          {
            title: "Monitoring Gap Progress",
            description: "Lists instruments that have opened with a gap and tracks their progress towards closing the gap. This tool is essential for traders looking to exploit gap-related trading opportunities by predicting potential price movements."
          }
        ]
      },
      {
        title: "WaveSurf",
        description: "WaveSurf calculates market volatility using two key indicators.",
        image: "/images/tools/WaveSurf.png",
        list: [
          {
            title: "Zigzag Indicator",
            description: "Utilizes a proprietary algorithm that detects a 0.2% price change with at least three candles per leg, providing insights into market rotation sizes."
          },
          {
            title: "ATR (Average True Range) Indicator",
            description: "Measures short-term volatility by calculating the average range between high and low prices over 5-minute intervals. These indicators offer a detailed understanding of market volatility and help traders predict significant price movements."
          }
        ]
      },
      {
        title: "PairSurf",
        description: "PairSurf aids in understanding market correlations and comparative trends between different trading instruments.",
        image: "/images/tools/PairSurf.png",
        list: [
          {
            title: "Market Correlations",
            description: "Identifies relationships between various assets, aiding in pairs trading strategies."
          },
          {
            title: "Comparative Trends",
            description: "Highlights how different instruments move in relation to each other, providing insights into market interdependencies. This tool is particularly useful for traders looking to leverage the relative performance of different assets."
          }
        ]
      },
      {
        title: "LiqSurf",
        description: "LiqSurf focuses on analyzing the order book to identify market pressure.",
        image: "/images/tools/RiskSurf.png",
        list: [
          {
            title: "Order Book Ratio",
            description: "Sums bid and ask liquidity levels to determine the dominant side of the market."
          },
          {
            title: "Calculation Methods",
            description: "Uses fixed percentage ranges, average zigzag sizes, and ATR analysis to calculate the ratio. This functionality helps traders understand which side of the market—buyers or sellers—is exerting more pressure, indicating potential market direction changes."
          }
        ]
      },
      {
        title: "TimeSurf",
        description: "TimeSurf analyzes market behavior in relation to news events.",
        image: "/images/tools/TrendSurf.png",
        list: [
          {
            title: "News Event Analysis",
            description: "Evaluates how specific news events impact market behavior."
          },
          {
            title: "Optimal Trading Times",
            description: "Highlights periods of potential high volatility or stability, helping traders plan their strategies around news releases and other time-sensitive events. This tool is invaluable for traders who need to anticipate and react to market movements driven by external events."
          }
        ]
      },
      {
        title: "StatSurf",
        description: "StatSurf provides statistical analysis of market events and trends based on historical data.",
        image: "/images/tools/StatSurf.png",
        list: [
          {
            title: "Probability Insights",
            description: "Calculates the statistical probabilities of specific market events, such as price level breaks or retests."
          },
          {
            title: "Scenario Analysis",
            description: "Uses current session data to predict market movements, aiding in decision-making by quantifying the likelihood of various scenarios. This tool enhances traders' ability to anticipate market behavior and make informed decisions based on statistical probabilities."
          }
        ]
      }
    ],
    footer: {
      title: "Summary",
      description: "WidgetSurf in TenSurf Hub is a robust suite of analytical tools designed to provide traders with deep, data-driven insights into market dynamics. Each tool within WidgetSurf offers unique functionalities that collectively empower traders to make informed decisions, manage risks effectively, and capitalize on market opportunities. By leveraging the comprehensive analytical capabilities of TrendSurf, GapSurf, WaveSurf, PairSurf, LiqSurf, TimeSurf, and StatSurf, traders can optimize their trading strategies and enhance their overall trading performance."
    }
  },
  "Chart_Surf": {
    title: "ChartSurf",
    header: "Automated Key Levels and Event Insights in ChartSurf",
    description: "ChartSurf is an advanced charting tool within TenSurf Hub that integrates a comprehensive suite of analytical features designed to support effective trading. By automating key level calculations and providing event insights, ChartSurf empowers traders to make informed decisions swiftly and accurately.",
    detailDescriptionTitle: "Key Features of ChartSurf:",
    items: [
      {
        title: "Delta and Footprint Imbalances",
        image: "/images/tools/TrendSurf.png",
        list: [
          {
            title: "Delta Imbalance",
            description: "Occurs when there is a significant discrepancy between buying and selling volumes in a single candle. For instance, if sellers outnumber buyers in a bullish candle, it indicates a potential shift in market sentiment."
          },
          {
            title: "Footprint Imbalance",
            description: "Highlights significant buy-sell volume discrepancies at specific price levels, providing insights into market sentiment and potential directional changes."
          }
        ]
      },
      {
        title: "Trend Analysis",
        image: "/images/tools/GapSurf.png",
        list: [
          {
            title: "Kaufman's Adaptive Moving Average (KAMA)",
            description: "Utilizes our proprietary algorithm to identify market trends across short, mid, and long-term horizons. This method adapts to market conditions, smoothing out price fluctuations to reveal underlying trends."
          },
        ]
      },
      {
        title: "Major Order Flow Levels",
        image: "/images/tools/WaveSurf.png",
        list: [
          {
            title: "Liquidity Levels",
            description: "Shows significant and persistent levels of liquidity in the order book, indicating where large buy or sell orders are clustered. This helps traders understand where major market players are placing their orders."
          }
        ]
      },
      {
        title: "Key Market Levels",
        image: "/images/tools/PairSurf.png",
        list: [
          {
            title: "Initial Balance",
            description: "Determined by the price range in the first hour of the Regular Trading Hours (RTH) session, reflecting early market sentiment and potential intraday trends."
          },
          {
            title: "Previous Session Highs/Lows",
            description: "Marks the highest and lowest prices from the previous RTH session, serving as key reference levels for the new session."
          },
          {
            title: "Overnight Session Highs/Lows",
            description: "Represents the highest and lowest prices attained during trading outside of regular trading hours, providing insights into overnight market movements."
          }
        ]
      },
      {
        title: "Volume Profile and VWAP Levels",
        description: "LiqSurf focuses on analyzing the order book to identify market pressure.",
        image: "/images/tools/RiskSurf.png",
        list: [
          {
            title: "Volume Profile",
            description: " Calculates the dominant side of the order book by summing bid and ask liquidity levels."
          },
          {
            title: "VWAP (Volume Weighted Average Price)",
            description: "Calculates the day’s average trading price weighted by volume, serving as a benchmark for traders. It includes standard deviation bands that expand in trending environments and contract in consolidating ones, offering additional context on market conditions."
          }
        ]
      },
      {
        title: "Support and Resistance (S/R) Levels",
        description: "TimeSurf analyzes market behavior in relation to news events.",
        image: "/images/tools/TrendSurf.png",
        list: [
          {
            title: "Automatic Calculation",
            description: "Uses our proprietary machine learning algorithm to identify and visualize key support and resistance levels. These levels highlight where prices have historically reversed or stalled, helping traders determine optimal entry and exit points."
          },
          {
            title: "Break and Hold Levels",
            description: "Automatically displays whether the price is breaking key levels or holding them based on typical market rotation sizes, offering real-time insights into market dynamics."
          }
        ]
      },
      {
        title: "Gap Analysis",
        description: "StatSurf leverages historical market data to provide statistical analysis of market events and trends.",
        image: "/images/tools/StatSurf.png",
        list: [
          {
            title: "Gap Tracking",
            description: "When the price opens with a gap relative to the previous RTH session range, it is marked on the chart at the beginning of the new RTH session. If the gap is subsequently filled, this event is also noted on the chart. This feature helps traders monitor and capitalize on gap-related trading opportunities."
          },
        ]
      }
    ],
    footer: {
      title: "Conclusion",
      description: "ChartSurf in TenSurf Hub is a comprehensive charting tool that combines a wide array of advanced analytical features to provide traders with deep insights into market dynamics. By automating the calculation and visualization of critical market levels and providing real-time event insights, ChartSurf empowers traders to make data-driven decisions, manage risks effectively, and capitalize on trading opportunities. Whether you are a beginner or an experienced trader, ChartSurf offers the tools you need to enhance your trading performance and navigate the complexities of the financial markets with confidence."
    }
  },
  "TenSurfBrain": {
    title: "TenSurf Brain",
    header: "Advanced Trading Insights by Chatting with TenSurf Brain",
    description: "TenSurf Brain is an artificial intelligence-powered chatbot designed to provide traders with a suite of advanced tools to enhance their trading strategies. This AI-driven assistant is accessible via both voice and text chat, making it highly interactive and user-friendly. Below are the key features and functionalities of TenSurf Brain, explained in more detail:",
    detailDescriptionTitle: "Key Features of TenSurf Brain:",
    items: [
      {
        title: "Trend Detection",
        image: "/images/tools/TrendSurf.png",
        list: [
          {
            title: "Comprehensive Analysis",
            description: "TenSurf Brain analyzes historical price data to detect trends in various financial instruments. Whether you need insights on short-term movements or long-term trends, this feature helps you understand the direction of the market."
          },
          {
            title: "Custom Queries",
            description: "Users can specify the period for trend analysis by asking questions like, \"What is the trend of NQ stock from May 1, 2024, to May 5, 2024?\" This allows for precise and tailored trend insights."
          }
        ]
      },
      {
        title: "Support/Resistance Analysis",
        image: "/images/tools/GapSurf.png",
        list: [
          {
            title: "Visual Identification",
            description: "This tool helps traders visually identify key support and resistance levels on charts. These levels are critical for making informed entry and exit decisions."
          },
          {
            title: "Automated Calculation",
            description: "TenSurf Brain uses proprietary algorithms to calculate and display these levels, providing traders with precise data on where the market might reverse or stall. This automatic calculation saves time and increases accuracy."
          }
        ]
      },
      {
        title: "Stop Loss and Take Profit Calculations",
        image: "/images/tools/WaveSurf.png",
        list: [
          {
            title: "Risk Management",
            description: "TenSurf Brain calculates optimal stop loss points to help manage risk effectively. It ensures that traders set stop losses at levels that minimize potential losses without cutting off profitable trades prematurely."
          },
          {
            title: "Profit Maximization",
            description: "Similarly, it determines ideal take profit points to secure gains before potential trend reversals, optimizing trading outcomes. This feature is essential for maintaining a balanced risk-reward ratio."
          }
        ]
      },
      {
        title: "Trading Bias Evaluation",
        image: "/images/tools/PairSurf.png",
        list: [
          {
            title: "Strategic Insights",
            description: "By analyzing current market conditions, TenSurf Brain evaluates trading biases and recommends whether to take long or short positions. This feature helps traders align their strategies with prevailing market sentiments."
          },
          {
            title: "Real-time Adjustments",
            description: "Traders receive timely recommendations based on the latest market data, ensuring their strategies remain relevant and effective. This dynamic assessment is crucial for adapting to market changes."
          }
        ]
      },
      {
        title: "YouTube Video Integration",
        image: "/images/tools/RiskSurf.png",
        list: [
          {
            title: "Learning Enhancement",
            description: "Traders can give YouTube videos directly to TenSurf Brain to receive concise summaries of the trading strategies discussed. This feature is particularly useful for learning new techniques and applying them quickly."
          },
          {
            title: "Interactive Summaries",
            description: "The AI processes the content of videos and provides actionable insights, making it easier for traders to understand and implement the strategies. This integration bridges the gap between theoretical knowledge and practical application."
          }
        ]
      },
      {
        title: "Voice and Text Chat Interaction",
        image: "/images/tools/TrendSurf.png",
        list: [
          {
            title: "Convenient Access",
            description: "TenSurf Brain can be interacted with via both voice and text, offering flexibility and convenience. Whether at a desk or on the go, traders can access the insights they need."
          },
          {
            title: "Natural Language Processing",
            description: "The AI chatbot understands and responds to natural language queries, making it intuitive and easy to use. This feature ensures that even traders who are not tech-savvy can navigate and utilize the tool effectively."
          }
        ]
      },
    ],
    footer: {
      title: "Conclusion",
      description: "TenSurf Brain is a powerful AI-driven tool that significantly enhances trading strategies through advanced analysis, risk management, and continuous learning. Its comprehensive suite of features ensures that traders are well-equipped to navigate the complexities of the financial markets, making data-driven decisions that optimize their trading performance. Whether you're a beginner or an experienced trader, TenSurf Brain offers invaluable insights and tools to elevate your trading game."
    }
  },
};