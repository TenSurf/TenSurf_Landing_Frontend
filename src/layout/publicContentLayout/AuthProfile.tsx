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
import { UserRoundIcon } from "lucide-react";

export const AuthProfile = () => {
  return (
    <div>
      {!isLoggedIn() && (
        <div className="items-center gap-4">
          <a href="/waitlist">
            <Button className="flex">Get Started</Button>
          </a>
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
                <DropdownMenuItem
                  onClick={() => {
                    removeCookie();
                    setTimeout(() => window.location.reload(), 1000);
                  }}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};
