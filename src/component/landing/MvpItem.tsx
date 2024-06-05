import GsapProvider from "@/component/landing/GsapProvider";

export const MvpItem = ({ title, description }: { title: string; description: string }) => {

  return (
    <GsapProvider selector={"#serviceSection"} fromVars={{ opacity: 0, skewX: 45, y: -100 }} toVars={{
      opacity: 1, skewX: 0, y: 0, duration: 1.5, scrollTrigger: {
        trigger: "#serviceSection",
        start: "center bottom"
      }
    }}>
      <div id={'serviceSection'}
        className="relative z-10 bg-[#000]/40 flex flex-col justify-center items-center gap-4 px-4 py-10 rounded-[24px] border-[1px] border-white/20 max-w-[392px]">
        <div className="text-[36px] font-semibold">{title}</div>
        <div className="text-[20px] font-normal">{description}</div>
      </div>
    </GsapProvider>
  );
};