import { TEAM_SECTION } from "../../constatns/landingPage.constants";
import Image from "next/image";
import React, { RefObject } from "react";
import FaqSection from "@/component/landing/FaqSection";
import TeamItem from "@/component/landing/team/TeamItem";

export const TeamSection = ({
  TeamRef,
}: {
  TeamRef?: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      className="flex flex-col w-full gap-[120px] mt-44 mb-[200px]">
      <h1 className={"text-5xl md:text-7xl font-medium text-center"}>Meet the Team</h1>
      <div className="relative w-full pb-[75vh] overflow-visible">
        <div
          className="absolute w-screen bg-[url('/images/subtitleBackground.svg')] bg-no-repeat bg-cover h-[200vh] bottom-0">
        </div>
        <Image src={"/images/team.png"} className={'2xl:rounded-3xl max-w-screen-2xl mx-auto'} objectFit={"cover"}
               alt={"About Us"} fill />
      </div>
      <div className="container w-full mx-auto flex-col md:gap-[200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[810px] mx-auto justify-center items-center">
          <TeamItem image={"/images/keivan-ebrahimi.png"} name={"Keivan Ebrahimi"} position={"Founder and CEO"}/>
          <TeamItem image={"/images/mesam-azad.png"} name={"Mesam Azad"} position={"Co-founder and CTO"}/>
          <TeamItem image={"/images/aaron-korbs.png"} name={"Aaron Korbs"} position={"Co-founder CMO"}/>
          <TeamItem image={"/images/pouya-asadi.png"} name={"Pouya Asadi"} position={"Chief Product Officer"}/>
        </div>
      </div>
    </div>
    // <div
    //   ref={TeamRef}
    //   id="Teams"
    //   className="relative flex flex-col items-center gap-10 scroll-m-20 max-w-screen-xl"
    // >
    //   <div className="text-3xl md:text-4xl lg:text-6xl font-semibold">
    //     {TEAM_SECTION.title}
    //   </div>
    //   <div className="flex flex-col items-center gap-6 md:gap-20 w-full">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6">
    //       {TEAM_SECTION.leaders.map((person, index) => (
    //         <a
    //           href={person.linkedIn}
    //           target={"_blank"}
    //           key={index}
    //           className="flex flex-col gap-5 animate-rotate"
    //         >
    //           <Image
    //             src={person.imgSrc}
    //             alt={person.name + "image"}
    //             className=" rounded-3xl w-full aspect-square"
    //             loading="lazy"
    //           />
    //           <div className="flex flex-col items-center text-center">
    //             <div className="text-[20px] font-bold">{person.name}</div>
    //             <div className="text-[#D7D7D7] text-sm font-normal">
    //               {person.description}
    //             </div>
    //           </div>
    //         </a>
    //       ))}
    //     </div>
    //     {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
    //       {TEAM_SECTION.persons.map((person, index) => (
    //         <a
    //           href={person.linkedIn || undefined}
    //           target={person.linkedIn ? "_blank" : undefined}
    //           onClick={event => {
    //             if (!person.linkedIn) {
    //               event.preventDefault();
    //             }
    //           }}
    //           key={index}
    //           className={`flex flex-col gap-5 team-item ${person.linkedIn ? "cursor-pointer" : "cursor-default"}`}
    //           rel="noreferrer"
    //         >
    //           <Image
    //             src={person.imgSrc}
    //             alt={person.name + "image"}
    //             className="rounded-3xl w-full aspect-square object-cover object-top"
    //             loading="lazy"
    //           />
    //           <div className="flex flex-col items-center text-center">
    //             <div className="text-xl font-semibold">{person.name}</div>
    //             <div className="text-[#D7D7D7] text-sm font-normal">{person.description}</div>
    //           </div>
    //         </a>
    //       ))}
    //     </div> */}
    //   </div>
    // </div>
  )
}
