import { FAQ_SECTION } from "@/constatns/landingPage.constants";
import FaqItem from "@/components/FaqItem";
import { Accordion } from "@/components/ui/accordion";
import GsapProvider from "@/component/landing/GsapProvider";

const FaqSection = () => {
  return (
    <div id={"Frequently_asked_questions"}
         className="relative flex flex-col items-center gap-10 scroll-m-20 w-full max-w-screen-2xl">
      <div className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-6">{FAQ_SECTION.title}</div>
      <Accordion type="multiple" className="w-full">
        <GsapProvider selector={".faq-item"} fromVars={{ opacity: 0, y: 100 }} toVars={{
          opacity: 1, y: 0, duration: 1.5, scrollTrigger: {
            trigger: ".faq-item",
            start: "center center"
          }
        }}>
          {FAQ_SECTION.items.map(val => (
            <FaqItem question={val.question} answer={val.answer} key={val.question} />
          ))}
        </GsapProvider>
      </Accordion>
      <h4 className={"text-xl md:text-2xl lg:text-3xl mt-8"}>{FAQ_SECTION.description}</h4>
    </div>
  );
};

export default FaqSection;