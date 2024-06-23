"use client"
import React, { ReactNode } from "react";
import { Drawer } from "vaul";
import { Button } from "@/components/ui/button";
import { CircleX, Home, Menu } from "lucide-react";
import Link from "next/link";
import { MENU_ITEMS } from "@/constatns/landingPage.constants";

const MenuDrawer = ({children}: {children: ReactNode}) => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
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
          <Drawer.Close>
            <Button variant={"link"}>
              <CircleX color="#ffffff" strokeWidth={1.5} />
            </Button>
          </Drawer.Close>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default MenuDrawer;