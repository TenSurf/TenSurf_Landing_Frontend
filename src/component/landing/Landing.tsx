"use client";

import { HeroSection } from "./heroSection/HeroSection";
import DefaultLayout from "../../layout/publicContentLayout/DefaultLayout";
import AboutUsSection from "@/component/landing/AboutUsSection";
import FaqSection from "@/component/landing/FaqSection";
import ToolsCard from "@/component/landing/toolsV2/ToolsCard";
import ToolsSlider from "@/component/landing/ToolsSlider";
import Video from "@/component/landing/video/Video";
import Subtitle from "@/component/landing/subtitle/Subtitle";

export const Landing = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col overflow-x-hidden items-center container">
        <HeroSection />
        <ToolsCard />
        <ToolsSlider />
        <Video />
      </div>
      <Subtitle />
      <div className="flex flex-col overflow-x-hidden items-center container">
        {/*<MvpSection productsRef={productsRef} />*/}
        {/*<OfferingSectionV2 />*/}
        {/*/!*<ChartSection ChartRef={chartRef} />*!/*/}
        {/*<PlansSection PlansRef={PlansRef} />*/}
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
