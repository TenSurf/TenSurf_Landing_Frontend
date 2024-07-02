import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const QuoteItem = ({image ,description ,quoteTitle ,name , link}: {image: string , name: string , quoteTitle: string , description: string , link: string}) => {
  return (
    <div className="quote-1 flex flex-col gap-6">
      <div className="flex items-center md:items-stretch gap-4">
        <Image className={'rounded-full shadow-md w-[50px] h-[50px] md:w-[80px] md:h-[80px]'} src={image} alt={name} width={80}
               height={80} />
        <div className="flex flex-1 flex-col justify-evenly">
          <h2 className={'text-2xl !text-[#FCFDFF]'}>{name}</h2>
          <h3 className={'text-base md:text-lg font-normal !text-[#FCFDFF]'}>{quoteTitle}</h3>
        </div>
      </div>
      <p className={'text-base md:text-xl font-normal !text-[#FCFDFF]'}>{description}</p>
      <hr className="block md:hidden h-px bg-[#495057] border-0" />
      <Link className={'block md:hidden w-full'} href={link}>
        <Button className={"text-[#ADB5BD] bg-[#ADB5BD]/10 flex gap-2 rounded-full py-6 xl:py-8 w-full"}>
          <p className={"text-xl font-semibold"}>Learn More</p>
          <ArrowRight size={20} strokeWidth={2} />
        </Button>
      </Link>
    </div>
  );
};

export default QuoteItem;