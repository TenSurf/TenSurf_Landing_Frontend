"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { isLoggedIn, removeCookie, getCookie } from "@/helpers/auth";
import { ArrowRight, UserRoundIcon, BrainCircuit } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface UserInfo {
  email: string;
  tier: string;
  full_name?: string;
}

export const AuthProfile = () => {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (isLoggedIn()) {
      const token = getCookie();
      fetch("https://brain.tensurf.ai/api/v1/auth/me", {
        headers: { Authorization: "Bearer " + token },
      })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data) setUser({ email: data.email, tier: data.tier, full_name: data.full_name });
        })
        .catch(() => {});
    }
  }, []);

  const signout = () => {
    removeCookie();
    window.location.reload();
  };

  return (
    <div>
      {!isLoggedIn() && (
        <Link className="flex" href="/login">
          <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-5 px-6">
            <p className="text-sm font-medium">Log In</p>
            <ArrowRight size={18} strokeWidth={2} />
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
                {user && (
                  <div className="px-2 py-1.5 text-sm">
                    <p className="font-medium">{user.full_name || user.email}</p>
                    <p className="text-xs text-muted-foreground capitalize">{user.tier?.replace("_", " ")}</p>
                  </div>
                )}
                <DropdownMenuSeparator />
                <a href="https://brain.tensurf.ai">
                  <DropdownMenuItem>
                    <BrainCircuit className="mr-2 h-4 w-4" />
                    Go to Brain
                  </DropdownMenuItem>
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
