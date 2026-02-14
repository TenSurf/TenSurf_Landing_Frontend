import Landing from "../component/landing/Landing";
import PageProvider from "../component/general/PageProvider";
import { PAGE_TITLE } from "../constatns/general.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TenSurf",
  description:
    "Turn trading ideas into automated NinjaScript strategies using plain English. TenSurf Brain runs inside NinjaTrader. Start your free 7-day trial.",
  openGraph: {
    title: "TenSurf Brain | AI Strategy Builder for NinjaTrader",
    description: "Turn trading ideas into automated NinjaScript strategies using plain English. No coding required.",
    type: "website",
    url: "https://tensurf.ai",
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
