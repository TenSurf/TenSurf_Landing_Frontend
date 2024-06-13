import React from "react";
import Link from "next/link";
import ArrowRight from "@/icons/ArrowRight";

const ToolData = ({
  description,
  link,
  title,
  name,
}: {
  title: string;
  name: string;
  description: string;
  quote: string;
  user: string;
  userAlt: string;
  userCompany: string;
  userName: string;
  userJob: string;
  userCompanyAlt: string;
  link: string;
}) => {
  return (
    <>
      <h6 className={"font-extrabold text-xl mb-1 text-primaryGradient"}>
        {name}
      </h6>
      <h3 className={"font-bold text-3xl leading-10 mb-3"}>{title}</h3>
      <p
        className={`cursor-pointer overflow-hidden text-lg font-light mb-2 line-clamp-[8] hover:line-clamp-[40] duration-1000 hover:max-h-[1000px] transition-all`}
      >
        {description}
      </p>
      <Link
        className={
          "group transition-all flex items-center gap-1 hover:underline underline-offset-4 w-fit"
        }
        href={link}
      >
        <p className={"text-xl"}>LEARN MORE </p>
        <ArrowRight className={"transition-all group-hover:translate-x-1/4 "} />
      </Link>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
};

export default ToolData;
