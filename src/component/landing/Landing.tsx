import { HeroSection } from "./heroSection/HeroSection";
import DefaultLayout from "../../layout/publicContentLayout/DefaultLayout";
import HowItWorks from "@/component/landing/howItWorks/HowItWorks";
import FinalCTA from "@/component/landing/finalCTA/FinalCTA";
import EditorialFeatures from "@/component/landing/features/EditorialFeatures";
import PainPoint from "@/component/landing/painPoint/PainPoint";

export const Landing = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col overflow-x-hidden items-center container">
        <HeroSection
          title={<>The Hottest New Algo Trading Language is <span className="gradient-text bg-gradient-to-r from-[#3944e1] via-[#7152da] to-[#ff7f65] bg-clip-text text-transparent">English</span></>}
          description={<>Andrej Karpathy, AI pioneer and former Tesla AI Director, said &ldquo;the hottest new programming language is English.&rdquo; We took that literally. Describe your trading strategy in plain English — TenSurf Brain generates the code, compiles it, and backtests it. Welcome to Vibe Trading.</>}
          productShot={{
            image: "/images/product/hero-workspace.png",
            alt: "TenSurf Brain workspace with strategy rules in chat and the strategy canvas on the right",
          }}
        />
        <EditorialFeatures />
      </div>
      <div className="flex flex-col overflow-x-hidden items-center container">
        <PainPoint />
        <HowItWorks />
        <FinalCTA />
      </div>
    </DefaultLayout>
  );
};

export default Landing;
