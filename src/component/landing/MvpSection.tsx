import { MVP_SECTION } from "../../constatns/landingPage.constants";
import { GradientShape } from "../general/GradientShape";
import { type RefObject, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MvpItem = ({ title, description }: { title: string; description: string }) => {

  const serviceRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(serviceRef.current, { opacity: 0, skewX: 45 , y: -100 }, {
      opacity: 1, skewX: 0 ,y: 0, duration: 1.5, scrollTrigger: {
        trigger: serviceRef.current,
        start: "center bottom"
      }
    });
  });

  return (
    <div
      ref={serviceRef}
      className="relative z-10 bg-[#000]/40 flex flex-col justify-center items-center gap-4 px-4 py-10 rounded-[24px] border-[1px] border-white/20 max-w-[392px]">
      <div className="text-[36px] font-semibold">{title}</div>
      <div className="text-[20px] font-normal">{description}</div>
    </div>
  );
};

// *.*.*.*.*.*.*.*.*.*.* Main Function ↓•↓•↓
export const MvpSection = ({ productsRef }: { productsRef: RefObject<HTMLDivElement> }) => {
  return (
    <div ref={productsRef} id="Productss"
         className="relative flex flex-col items-center justify-center gap-6 scroll-m-28 max-w-screen-xl">
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
