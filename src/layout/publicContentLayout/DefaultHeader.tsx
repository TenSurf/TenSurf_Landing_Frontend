import { MENU_ITEMS } from "../../constatns/landingPage.constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import React from "react";
import MenuDrawer from "@/layout/publicContentLayout/MenuDrawer";

export const DefaultHeader = () => {

  return (
    <div className="lg:!container z-50 sticky top-0 lg:top-6">
      <div
        className="lg:rounded-3xl mt-0 flex lg:mx-10 2xl:mx-auto 2xl:w-full items-center px-6 md:px-12 py-7 justify-between bg-[#01061D]/50 backdrop-blur-lg">
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

            <Link
              className={"flex"}
              href={process.env.NEXT_PUBLIC_SIGNUP_URL ?? ""}
              target="_blank"
            >
              <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6">
                <p>Get Started</p>
                <ArrowRight size={20} strokeWidth={2} />
              </Button>
            </Link>
            <MenuDrawer>
              <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                <Link href={"/"} className={"block w-full max-w-[336px]"}>
                  <div
                    className="flex rounded-3xl bg-[#ADB5BD]/10 items-center justify-start gap-2 cursor-pointer w-full py-4 px-6"
                  >
                    <Home size={20} color="#adb5db" />
                    <div>
                      <p className={"text-white text-xl font-bold"}>Home</p>
                    </div>
                  </div>
                  <span className={"h-[1px] bg-white w-3/4"}></span>
                </Link>
                {MENU_ITEMS.map((item: any, index: number) => (
                  <Link key={index} href={item.url} className={"block w-full max-w-[336px]"}>
                    <div
                      id={item.title}
                      className="flex rounded-3xl bg-[#ADB5BD]/10 items-center justify-start gap-2 cursor-pointer w-full py-4 px-6"
                    >
                      {<item.icon className="text-white" />}
                      <div>
                        <p className={"text-white text-xl font-bold"}>{item.title}</p>
                      </div>
                    </div>
                    <span className={"h-[1px] bg-white w-3/4"}></span>
                  </Link>
                ))}
              </div>
            </MenuDrawer>
          </>
        </div>
      </div>
    </div>
  );
};
