import React from "react";
import ToolCard from "@/component/landing/tools/ToolCard";
import ToolData from "@/component/landing/tools/ToolData";

const ToolItem = (
  {
    direction,
    image,
    imageAlt,
    ...rest
  }: {
    direction: "left" | "right",
    image: string,
    imageAlt: string,
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


  return (
    <ToolCard image={image} imageAlt={imageAlt} direction={direction}>
      <ToolData {...rest} />
    </ToolCard>
  );
};

export default ToolItem;