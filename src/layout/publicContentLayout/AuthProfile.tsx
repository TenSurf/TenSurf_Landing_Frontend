"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTE } from "@/constatns/general.constants";
import { isLoggedIn, removeCookie } from "@/helpers/auth";
import { HttpMethod, sendRequest } from "@/helpers/http-request";
import { ArrowRight, UserRoundIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const AuthProfile = () => {
  const signout = () => {
    sendRequest("/account/log_out/", HttpMethod.POST).then(() => {
      removeCookie();
    });
  };
  return (
    <div>
      {!isLoggedIn() && (
        <Link className={"flex"} href={"/waitlist"}>
          <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6">
            <p>Get Started</p>
            <ArrowRight size={20} strokeWidth={2} />
          </Button>
        </Link>
      )}
      {isLoggedIn() && (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button size={"icon"} variant={"ghost"} className="rounded-full">
                <UserRoundIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <a href={ROUTE.profileSetting}>
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                </a>
                <a href={ROUTE.profileBilling}>
                  <DropdownMenuItem>Account and Billing</DropdownMenuItem>
                </a>
                <DropdownMenuItem onClick={signout}>Sign out</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};
