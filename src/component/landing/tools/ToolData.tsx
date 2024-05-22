import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/icons/ArrowRight";
import QuoteIcon from "@/icons/QuoteIcon";
import Image from "next/image";

const ToolData = (
  {
    userAlt,
    userCompanyAlt,
    user,
    userCompany,
    quote,
    description,
    userJob,
    userName,
    link,
    title,
    name
  }: {
    title: string,
    name: string,
    description: string,
    quote: string,
    user: string,
    userAlt: string,
    userCompany: string,
    userName: string,
    userJob: string,
    userCompanyAlt: string,
    link: string
  }) => {

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [paragraphHeight, setParagraphHeight] = useState<number>();

  useEffect(() => {
    setParagraphHeight(descriptionRef.current?.clientHeight)
  }, []);

  return (
    <>
      <h6 className={"font-extrabold text-xl mb-1 text-primaryGradient"}>{name}</h6>
      <h3 className={"font-bold text-3xl leading-10 mb-3"}>{title}</h3>
      <p ref={descriptionRef}
         className={`cursor-pointer overflow-hidden max-h-[${paragraphHeight ?? 0}px] text-lg font-light mb-2 line-clamp-3 hover:line-clamp-[40] duration-1000 hover:max-h-[1000px] transition-all`}>{description}</p>
      <Link className={"group transition-all flex items-center gap-1 hover:underline underline-offset-4 w-fit"}
            href={link}>
        <p className={"text-xl"}>LEARN MORE </p>
        <ArrowRight className={"transition-all group-hover:translate-x-1/4 "} />
      </Link>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex items-start gap-3">
        <div>
          <QuoteIcon className={"w-[32px] h-[32px]"} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className={""}>{quote}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-stretch">
              <Image objectFit={"contain"} src={user} alt={userAlt} width={60}
                     height={60} className={"rounded-full"} />
              <div className="flex flex-col justify-evenly">
                <p className={"text-base font-extrabold"}>{userName}</p>
                <p className={"text-base"}>{userJob}</p>
              </div>
            </div>
            <Image src={userCompany} objectFit={"contain"} alt={userCompanyAlt} width={40} height={0}
                   style={{ width: "fit-content", height: "auto" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolData;