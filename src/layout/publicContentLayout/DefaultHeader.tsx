import { MENU_ITEMS } from "../../constatns/landingPage.constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuDrawer from "@/layout/publicContentLayout/MenuDrawer";

export const DefaultHeader = () => {
  return (
    <div className="lg:!container z-50 sticky top-0 lg:top-6">
      <div
        className="lg:rounded-3xl mt-0 flex lg:mx-10 2xl:mx-auto 2xl:w-full items-center px-6 md:px-12 py-7 justify-between bg-background/80 backdrop-blur-lg border-b border-border/30 overflow-hidden">
        <Link href={"/"}>
          <Image
            src={"/tensurf.png"}
            width={150}
            height={50}
            alt="Tensurf"
            className="rounded"
          />
        </Link>

        <div className="hidden items-center text-center gap-10 lg:gap-0 lg:flex lg:flex-1 lg:justify-between xl:px-12">
          {MENU_ITEMS.map((item: any, index: number) => (
            <Link
              id={item.title}
              key={index}
              className="flex items-center gap-1 transition-all rounded-full hover:bg-[#979DAC]/10 py-3 px-4"
              href={item.url}
            >
              {<item.icon className="text-white" />}
              <div>{item.title}</div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href="/waitlist">
            <div className="flex items-center gap-2 bg-[#082FDF]/20 border border-[#082FDF]/40 rounded-full px-4 sm:px-5 py-2.5 hover:bg-[#082FDF]/30 transition-colors">
              <span className="w-2 h-2 bg-[#082FDF] rounded-full animate-pulse shrink-0"></span>
              <span className="text-sm font-medium text-white whitespace-nowrap">Join the Waitlist</span>
            </div>
          </Link>
          <MenuDrawer />
        </div>
      </div>
    </div>
  );
};
