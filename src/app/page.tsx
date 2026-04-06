import Landing from "../component/landing/Landing";
import PageProvider from "../component/general/PageProvider";
import { PAGE_TITLE } from "../constatns/general.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TenSurf Brain | Vibe Trading — The AI Strategy Builder for NinjaTrader",
  description:
    "Vibe Trading: describe your trading strategy in English, get working NinjaScript code. Inspired by vibe coding. Built for NinjaTrader. Join the waitlist.",
  openGraph: {
    title: "The Hottest New Algo Trading Language is English",
    description: "Vibe Trading: describe your strategy in plain English. AI generates the code, compiles it, and backtests it. Welcome to the future of algorithmic trading.",
    type: "website",
    url: "https://tensurf.ai",
    images: ["/images/og-vibe-trading.png"],
  },
};

const MainPage = () => {
  return (
    <div>
      <PageProvider title={PAGE_TITLE.home}>
        <Landing />
      </PageProvider>
    </div>
  );
};

export default MainPage;
