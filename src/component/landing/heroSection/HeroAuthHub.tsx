"use client";

import { Button } from "@/components/ui/button";
import { isLoggedIn } from "@/helpers/auth";

export const HeroAuthHub = () => {
  return (
    <div>
      <a
        href={isLoggedIn() ? process.env.NEXT_PUBLIC_HUB_URL : "/signin"}
        target={isLoggedIn() ? "_blank" : '_self'}
      >
        <Button className="h-16 bg-primary font-bold text-lg">
          Go to TenSurf Hub
        </Button>
      </a>
    </div>
  );
};
