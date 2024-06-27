"use client";

import { Button } from "@/components/ui/button";
import { isLoggedIn } from "@/helpers/auth";
import { useRouter } from "next/navigation";

export const HeroAuthHub = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        className="h-16 bg-primary font-bold text-lg"
        onClick={() =>
          isLoggedIn()
            ? router.push(process.env.NEXT_PUBLIC_HUB_URL as string)
            : router.push("/signin")
        }
      >
        Go to TenSurf Hub
      </Button>
    </div>
  );
};
