import { MVP_SECTION } from "../../constatns/landingPage.constants";
import { GradientShape } from "../general/GradientShape";
import { MvpItem } from "@/component/landing/MvpItem";

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const MvpSection = () => {

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-6 scroll-m-28 max-w-screen-2xl" id="Productss">
      <div className="text-3xl md:text-4xl lg:text-6xl font-semibold">{MVP_SECTION.title}</div>
      <div className="grid gird-cols-1 md:grid-cols-3 gap-6 text-center items-stretch justify-between w-full">
        {MVP_SECTION.items.slice(0, 3).map((item, index: number) => (
          <MvpItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
      <div className="grid gird-cols-1 md:grid-cols-3 gap-6 text-center items-stretch  justify-between w-full">
        {MVP_SECTION.items.slice(3, 6).map((item, index: number) => (
          <MvpItem key={index} title={item.title} description={item.description} />
        ))}
      </div>
      <GradientShape />
    </div>
  );
};
