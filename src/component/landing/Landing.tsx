import { type FC } from "react";
import { MvpSection } from "./MvpSection";
import { HeroSection } from "./heroSection/HeroSection";
import { PlansSection } from "./plansSection/PlansSection";
import DefaultLayout from "../../layout/publicContentLayout/DefaultLayout";
import AboutUsSection from "@/component/landing/AboutUsSection";
import FaqSection from "@/component/landing/FaqSection";
import OfferingSectionV2 from "@/component/landing/OfferingSectionV2";
import PlansServerSideSection from "./plansSection/PlansServerSideSection";

export const Landing: FC = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col w-full  items-center gap-[200px] px-6 md:px-10 overflow-x-hidden">
        <HeroSection />
        <MvpSection />
        <OfferingSectionV2 />
        {/*<ChartSection ChartRef={chartRef} />*/}
        {/* <PlansSection /> */}
        <PlansServerSideSection />
        {/*<InnovationSection />*/}
        <AboutUsSection />
        {/*<TeamSection TeamRef={TeamRef} />*/}
        <FaqSection />
        {/*<Chatbot/>*/}
      </div>
    </DefaultLayout>
  );
};

export default Landing;
