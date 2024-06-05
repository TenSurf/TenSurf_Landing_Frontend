"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

const TeamItem = ({ person }: {
  person: { name: string, description: string, imgSrc: StaticImageData, linkedIn: string }
}) => {
  return (
    <a
      href={person.linkedIn || undefined}
      target={person.linkedIn ? "_blank" : undefined}
      onClick={event => {
        if (!person.linkedIn) {
          event.preventDefault();
        }
      }}
      className={`flex flex-col gap-5 team-item ${person.linkedIn ? "cursor-pointer" : "cursor-default"}`}
      rel="noreferrer"
    >
      <Image
        src={person.imgSrc}
        alt={person.name + "image"}
        className="rounded-3xl w-full aspect-square object-cover object-top"
        loading="lazy"
      />
      <div className="flex flex-col items-center text-center">
        <div className="text-xl font-semibold">{person.name}</div>
        <div className="text-[#D7D7D7] text-sm font-normal">{person.description}</div>
      </div>
    </a>
  );
};

export default TeamItem;