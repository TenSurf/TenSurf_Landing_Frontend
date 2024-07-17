import { HeroSection } from "./heroSection/HeroSection";
import DefaultLayout from "../../layout/publicContentLayout/DefaultLayout";
import ToolsCard from "@/component/landing/toolsV2/ToolsCard";
import ToolsSlider from "@/component/landing/ToolsSlider/ToolsSlider";
import Video from "@/component/landing/video/Video";
import Subtitle from "@/component/landing/subtitle/Subtitle";

export const Landing = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col overflow-x-hidden items-center container overflow-y-hidden">
        <HeroSection title={"Next Generation of Trading Platforms here"} description={"At TenSurf, we are committed to revolutionizing trading and democratizing algorithmic trading. Our mission is to harness the power of Generative AI and Data Science to enable smart trading decisions to surf financial markets."}/>
        <ToolsCard />
        <ToolsSlider />
        <Video />
      </div>
      <Subtitle />
      {/*<div className="flex flex-col overflow-x-hidden items-center container">*/}
      {/*<MvpSection productsRef={productsRef} />*/}
      {/*<OfferingSectionV2 />*/}
      {/*/!*<ChartSection ChartRef={chartRef} />*!/*/}
      {/*<PlansSection PlansRef={PlansRef} />*/}
      {/*<InnovationSection />*/}
      {/*<AboutUsSection />*/}
      {/*<TeamSection TeamRef={TeamRef} />*/}
      {/*<FaqSection />*/}
      {/*<Chatbot/>*/}
      {/*</div>*/}
    </DefaultLayout>
  );
};

export default Landing;
