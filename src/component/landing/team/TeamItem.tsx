import React from "react";
import Image from "next/image";

const TeamItem = ({position , image ,name}: {name: string , position: string , image: string}) => {
  return (
    <div className="group flex flex-col gap-2 grayscale hover:grayscale-0 transition-all">
      <div className="relative w-full pb-[75%] rounded-3xl overflow-hidden">
        <Image src={image} className={"transition-all rounded-3xl overflow-hidden max-w-screen-2xl mx-auto group-hover:scale-110"}
               objectFit={"fill"}
               alt={name} fill />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className={"text-xl font-medium"}>{name}</h4>
        <p className={"text-base font-normal"}>{position}</p>
      </div>
    </div>
  );
};

export default TeamItem;