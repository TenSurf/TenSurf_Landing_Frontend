import { TEAM_SECTION } from "../../constatns/landingPage.constants";
import Image from "next/image";
import GsapProvider from "@/component/landing/GsapProvider";
import TeamItem from "@/component/TeamItem";

export const TeamSection = () => {

  return (
    <GsapProvider
      selector={".team-item"} fromVars={{ rotateY: 90, opacity: 0 }}
      toVars={{
        opacity: 1, rotateY: 0, duration: 1.5, scrollTrigger: {
          trigger: ".team-item",
          start: "center bottom"
        }
      }}
      scope={".teamContainer"}
    >
      <div id="Teams" className="relative flex flex-col items-center gap-10 scroll-m-20 max-w-screen-xl">
        <div className="text-3xl md:text-4xl lg:text-6xl font-semibold">{TEAM_SECTION.title}</div>
        <div className="flex flex-col items-center gap-6 md:gap-20 w-full teamContainer">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6">
            {TEAM_SECTION.leaders.map((person, index) => (
              <a href={person.linkedIn} target={"_blank"} key={index} className="flex flex-col gap-5 team-item"
                 rel="noreferrer">
                <Image
                  src={person.imgSrc}
                  alt={person.name + "image"}
                  className=" rounded-3xl w-full aspect-square"
                  loading="lazy"
                />
                <div className="flex flex-col items-center text-center">
                  <div className="text-[20px] font-bold">{person.name}</div>
                  <div className="text-[#D7D7D7] text-sm font-normal">{person.description}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {TEAM_SECTION.persons.map((person, index) => (
              <TeamItem person={person} key={person.name}/>
            ))}
          </div>
        </div>
      </div>
    </GsapProvider>
  );
};
