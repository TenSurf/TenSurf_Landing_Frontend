import Landing from "../component/landing/Landing";
import PageProvider from "../component/general/PageProvider";
import { PAGE_TITLE } from "../constatns/general.constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TenSurf",
  description:
    'Experience the future of trading with TenSurf Hub, where our cutting-edge "TenSurf Brain" AI chat interface delivers real-time market analysis and insights directly to you. Integrate your trading strategy with our intuitive, no-code platform that makes algorithmic trading accessible to everyone.',
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
