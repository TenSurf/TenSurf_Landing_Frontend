import { type RefObject } from "react";
import { MENU_ITEMS } from "../../constatns/landingPage.constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const DefaultHeader = ({
  headerRef,
}: {
  headerRef?: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={headerRef}
      className="z-50 sticky top-0 flex items-center px-6 md:px-24 py-4 justify-between bg-[#121212]"
    >
      <Link href={"/"}>
        <Image
          src={"/tensurf.png"}
          width={148}
          height={10}
          alt="Tensurf"
          className="rounded"
        />
      </Link>

      <div className="hidden items-center gap-10 lg:flex">
        {MENU_ITEMS.map((item: any, index: number) => (
          <a
            id={item.title}
            key={index}
            className="flex items-center gap-1"
            href={item.url}
          >
            {<item.icon className="text-white" />}
            <div>{item.title}</div>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href={process.env.NEXT_PUBLIC_SIGNUP_URL} target="_blank">
          <Button className="flex">Get Started</Button>
        </a>
      </div>
    </div>
  );
};
