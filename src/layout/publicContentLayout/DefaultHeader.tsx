import { MENU_ITEMS } from "../../constatns/landingPage.constants";
import { Suspense, type RefObject, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AuthProfile } from "./AuthProfile";
import { ArrowRight, Home } from "lucide-react";
import React from "react";
import MenuDrawer from "@/layout/publicContentLayout/MenuDrawer";

export const DefaultHeader = () => {



  return (
    <div className="lg:!container z-50 sticky top-0 lg:top-6">
      <div
        className="lg:rounded-3xl mt-0 flex lg:mx-10 2xl:mx-auto 2xl:w-full items-center px-6 md:px-12 py-7 justify-between bg-[#01061D]/50 backdrop-blur-lg overflow-hidden">
        <Link href={"/"}>
          <Image
            src={"/tensurf.png"}
            width={90}
            height={10}
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

        <div className="flex items-center gap-6">
          <>
            {/*<Button*/}
            {/*  onClick={() => setShouldShowSignInSignUpModal({ signUp: false, signIn: true })}*/}
            {/*  variant={'ghost'}*/}
            {/*  className='hover:bg-inherit hover:text-neutral-300 gap-1'*/}
            {/*>*/}
            {/*  <UserIcon />*/}
            {/*  Login*/}
            {/*</Button>*/}

            <Suspense>
              <AuthProfile />
            </Suspense>
            <MenuDrawer />
          </>
        </div>
      </div>
    </div>
  );
};
