import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

export const SocialAuthButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Button
      variant={"outline"}
      onClick={onClick}
      className={"w-full bg-transparent"}
    >
      <div className="w-32 flex items-center justify-start gap-4">{children}</div>
    </Button>
  );
};

export default SocialAuthButton;
