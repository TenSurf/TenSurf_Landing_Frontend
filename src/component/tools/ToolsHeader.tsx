import React from "react";
import { Button } from "@/components/ui/button";

const ToolsHeader = ({
  title,
  header,
  description,
}: {
  title: string;
  description: string;
  header: string;
}) => {
  return (
    <div className="flex flex-col gap-10 text-center items-center h-screen">
      <div className="pageTitle w-full">
        <h1
          className={"text-2xl md:text-3xl 2xl:text-4xl text-center py-2 mb-3"}
        >
          {title}
        </h1>
      </div>
      <h2
        className={
          "font-extrabold text-4xl md:text-5xl 2xl:text-6xl max-w-4xl text-center py-2 mb-3"
        }
      >
        {header}
      </h2>
      <p className={"text-2xl font-semibold mb-14"}>{description}</p>
      <a href={process.env.NEXT_PUBLIC_HUB_URL}>
        <Button className="w-52 h-16 bg-primary font-bold text-lg">
          Go to TenSurf Hub
        </Button>
      </a>
    </div>
  );
};

export default ToolsHeader;
