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
import { ArrowRight, LogIn, UserRoundIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const AuthProfile = () => {
  const signout = () => {
    sendRequest("/account/log_out/", HttpMethod.POST).then(() => {
      removeCookie();
      window.location.reload();
    });
  };
  return (
    <div>
      {!isLoggedIn() && (
        <div className="flex items-center gap-3">
          {/* Login link */}
          <Link 
            href="/signin"
            className="hidden md:flex items-center gap-2 text-[#ADB5BD] hover:text-white transition-colors py-2 px-3"
          >
            <LogIn className="w-4 h-4" />
            <span className="text-sm">Login</span>
          </Link>
          
          {/* Sign Up button */}
          <Link className="flex" href="/signup">
            <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-5 px-6">
              <p className="text-sm font-medium">Sign Up</p>
              <ArrowRight size={18} strokeWidth={2} />
            </Button>
          </Link>
        </div>
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
                <DropdownMenuItem onClick={signout}>Sign Out</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};
