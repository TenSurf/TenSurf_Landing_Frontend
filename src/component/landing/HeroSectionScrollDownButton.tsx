import React from "react";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import Link from "next/link";

const HeroSectionScrollDownButton = () => {

  return (
    <Link href={"#Productss"}>
      <ChevronDownIcon
        className="absolute z-10 bottom-24 h-8 w-8 animate-bounce cursor-pointer hidden lg:block"
      />
    </Link>
  );
};

export default HeroSectionScrollDownButton;