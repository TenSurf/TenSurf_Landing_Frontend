import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Link from "next/link";
import ArrowRight from "@/icons/ArrowRight";
import QuoteIcon from "@/icons/QuoteIcon";
import Image from "next/image";
import AOS from 'aos';

const ToolItem = (
  {
    direction,
    link,
    image,
    imageAlt,
    userAlt,
    userCompanyAlt,
    user,
    userCompany,
    quote,
    description,
    userJob, userName,
    title
  }: {
    direction: "left" | "right",
    image: string,
    imageAlt: string,
    title: string,
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

  useEffect(() => {
    AOS.init({
      duration: 2000,
      anchorPlacement: 'center-center',
      once: true,
    });
  }, [])


  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 md:max-w-[600px] lg:max-w-none px-6 sm:px-0 gap-14 items-start justify-between w-full">
      <div data-aos={direction == "right" ? 'fade-left' : 'fade-right'} className={direction == "left" ? "order-1" : "order-2"}>
        <h3 className={"font-extrabold text-4xl mb-5"}>{title}</h3>
        <p className={"text-xl font-light mb-10"}>{description}</p>
        <Link className={"group transition-all flex items-center gap-1 hover:underline underline-offset-4"} href={link}>
          <p className={"text-xl"}>LEARN MORE </p>
          <ArrowRight className={"transition-all group-hover:translate-x-1/4 "} />
        </Link>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex items-start gap-4">
          <div>
            <QuoteIcon className={"w-[32px] h-[32px]"} />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p>{quote}</p>
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
      </div>
      <div data-aos={direction == 'left' ? 'fade-left' : 'fade-right'} className={`relative pb-[63%] ${direction == "right" ? "order-1" : "order-2"}`}>
        <Image src={image} alt={imageAlt} layout={"fill"} objectFit={"contain"}
               className={"rounded"} />
      </div>
    </div>
  );
};

export default ToolItem;