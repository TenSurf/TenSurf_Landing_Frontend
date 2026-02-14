"use client";
import React, { ReactNode, useState } from "react";
import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import { CircleX, Home, Menu } from "lucide-react";
import Link from "next/link";
import { MENU_ITEMS } from "@/constatns/landingPage.constants";

const MenuDrawer = () => {

  const [drawer, setDrawer] = useState(false);

  return (
    <Drawer.Root direction="right" open={drawer}>
      <Drawer.Trigger asChild onClick={() => setDrawer(true)}>
        <Button
          aria-label="menu"
          className={
            "block lg:hidden bg-transparent p-2 hover:bg-[#33415C33]/60 rounded-full"
          }
        >
          <Menu size={24} strokeWidth={1.5} />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 bg-blend-overlay bg-[#01061D]/50 backdrop-blur-lg z-[999] w-full h-full" />
        <Drawer.Content
          className="bg-[#02040E33]/20 flex flex-col gap-6 items-end rounded-t-[10px] h-full w-[100vw] mt-24 fixed bottom-0 right-0 z-[1000]">
          <Drawer.Close onClick={() => setDrawer(false)}>
            <Button variant={"link"}>
              <CircleX color="#ffffff" strokeWidth={1.5} />
            </Button>
          </Drawer.Close>
          <div className="w-full h-full flex flex-col justify-center items-center gap-6">
            <Link href={"/"} className={"block w-full max-w-[336px]"} onClick={() => setDrawer(false)}>
              <div
                className="flex rounded-3xl bg-[#ADB5BD]/10 hover:bg-primary items-center justify-start gap-2 cursor-pointer w-full py-4 px-6"
              >
                <Home size={20} color="#adb5db" />
                <div>
                  <p className={"text-white text-xl font-bold"}>Home</p>
                </div>
              </div>
              <span className={"h-[1px] bg-white w-3/4"}></span>
            </Link>
            {MENU_ITEMS.map((item: any, index: number) => (
              <Link key={index} href={item.url} className={"block w-full max-w-[336px]"}
                    onClick={() => setDrawer(false)}>
                <div
                  id={item.title}
                  className="flex rounded-3xl bg-[#ADB5BD]/10 hover:bg-primary items-center justify-start gap-2 cursor-pointer w-full py-4 px-6"
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
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default MenuDrawer;