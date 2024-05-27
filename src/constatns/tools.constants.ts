export const TOOLS:{[key:string]: any} = {
  "WidgetSurf": {
    title: "WidgetSurf",
    header: "Enhanced Trading Insights with WidgetSurf in TenSurf Hub",
    description: "WidgetSurf in TenSurf Hub integrates a diverse range of tools for comprehensive market analysis and trading strategy optimization. These tools collectively empower traders with valuable insights and data-driven decision-making capabilities.",
    detailDescriptionTitle: "Detailed Descriptions of WidgetSurf Tools",
    items: [
      {
        title: "TrendSurf",
        description: "TrendSurf offers comprehensive market trend analysis, showcasing both short-term and long-term trends.",
        image: "/images/tools/TrendSurf.png",
        list: [
          {
            title: "Short-term trends",
            description: "Includes trends from the past hour, the current trading session, and overnight activities"
          },
          {
            title: "Long-term trends",
            description: "Covers trends from the previous session, the past week, and the past month. This capability enables users to simultaneously understand the short-term and long-term trends of the market accurately."
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
            description: "Tracks market price gaps and offers statistical insights on the likelihood of these gaps being filled."
          },
          {
            title: "Opportunity Identification",
            description: "Lists instruments that have opened with a gap and monitors their progress towards closing the gap. This tool assists traders in spotting potential price movements and capitalizing on gap-related trading opportunities."
          }
        ]
      },
      {
        title: "WaveSurf",
        description: "WaveSurf calculates market volatility using two key indicators:",
        image: "/images/tools/WaveSurf.png",
        list: [
          {
            title: "Zigzag Indicator",
            description: "Utilizes a proprietary algorithm that requires a 0.2% price change and at least three candles per leg across different sessions."
          },
          {
            title: "ATR (Average True Range) Indicator",
            description: "Measures short-term volatility by calculating the average range between high and low prices over 1-minute intervals. These indicators help traders assess the market's volatility patterns, aiding in the prediction of significant price movements."
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
            description: "Helps traders analyze the relationships between various assets."
          },
          {
            title: "Comparative Trends",
            description: "Useful for pairs trading by highlighting how different instruments move in relation to each other. This tool is essential for traders who want to leverage the interdependencies between markets to inform their trading strategies."
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
            description: " Calculates the dominant side of the order book by summing bid and ask liquidity levels."
          },
          {
            title: "Calculation Methods",
            description: "Includes fixed percentage ranges, zigzag patterns based on price changes, and ATR analysis on 1-minute timeframes. This functionality provides insights into market pressure exerted by buyers or sellers, which can indicate potential market direction changes."
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
            description: "Highlights periods of potential high volatility or stability for strategic planning. This tool is especially useful for traders planning their strategies around news releases and other time-sensitive events that could affect market conditions."
          }
        ]
      },
      {
        title: "StatSurf",
        description: "StatSurf leverages historical market data to provide statistical analysis of market events and trends.",
        image: "/images/tools/StatSurf.png",
        list: [
          {
            title: "Probability Insights",
            description: "Offers statistical probabilities of specific market events, such as the likelihood of price level breaks."
          },
          {
            title: "Scenario Analysis",
            description: "based on historical trends. This tool aids traders in making informed decisions by quantifying the likelihood of various trading scenarios, enhancing their ability to anticipate market behavior."
          }
        ]
      }
    ],
    summery: {
      title: "Summary",
      description: "WidgetSurf in TenSurf Hub is a powerful suite of analytical tools designed to enhance trading strategies through comprehensive market insights. Each tool within WidgetSurf provides unique functionalities that together empower traders to make data-driven decisions, manage risks effectively, and capitalize on market opportunities. Whether analyzing trends, gaps, volatility, correlations, order book dynamics, news impacts, or statistical probabilities, WidgetSurf offers a robust solution for traders aiming to optimize their trading performance."
    }
  }
};