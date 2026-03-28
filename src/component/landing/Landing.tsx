import { HeroSection } from "./heroSection/HeroSection";
import DefaultLayout from "../../layout/publicContentLayout/DefaultLayout";
import ToolsCard from "@/component/landing/toolsV2/ToolsCard";
import Subtitle from "@/component/landing/subtitle/Subtitle";
import HowItWorks from "@/component/landing/howItWorks/HowItWorks";
import FinalCTA from "@/component/landing/finalCTA/FinalCTA";
import PainPoint from "@/component/landing/painPoint/PainPoint";

export const Landing = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col overflow-x-hidden items-center container">
        <HeroSection 
          title={<>The Hottest New <span className="text-[#082FDF]">Algo Trading</span> Language is English</>}
          description={<>Andrej Karpathy, AI pioneer and former Tesla AI Director, said &ldquo;the hottest new programming language is English.&rdquo; We took that literally. Describe your trading strategy in plain English — TenSurf Brain generates the code, compiles it, and backtests it. Welcome to Vibe Trading.</>}
        />
        <ToolsCard />
      </div>
      <Subtitle />
      <div className="flex flex-col overflow-x-hidden items-center container">
        <PainPoint />
        <HowItWorks />
        <FinalCTA />
      </div>
    </DefaultLayout>
  );
};

export default Landing;
