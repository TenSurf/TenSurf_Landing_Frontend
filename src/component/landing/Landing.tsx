import { HeroSection } from "./heroSection/HeroSection";
import DefaultLayout from "../../layout/publicContentLayout/DefaultLayout";
import ToolsCard from "@/component/landing/toolsV2/ToolsCard";
import Subtitle from "@/component/landing/subtitle/Subtitle";
import HowItWorks from "@/component/landing/howItWorks/HowItWorks";
import PricingPreview from "@/component/landing/pricingPreview/PricingPreview";
import Roadmap from "@/component/landing/roadmap/Roadmap";
import FinalCTA from "@/component/landing/finalCTA/FinalCTA";
import PainPoint from "@/component/landing/painPoint/PainPoint";

export const Landing = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col overflow-x-hidden items-center container overflow-y-hidden">
        <HeroSection 
          title="Turn Trading Ideas Into Automated Strategies" 
          description={<>Describe your strategy in plain English. TenSurf Brain generates the code, compiles it, and backtests it—all inside NinjaTrader.<br />No coding required.</>}
        />
        <ToolsCard />
      </div>
      <Subtitle />
      <div className="flex flex-col overflow-x-hidden items-center container">
        <PainPoint />
        <HowItWorks />
        <Roadmap />
        <PricingPreview />
        <FinalCTA />
      </div>
    </DefaultLayout>
  );
};

export default Landing;
