import { type ReactNode } from "react";
import { PublicFooter } from "./PublicFooter";
import { DefaultHeader } from "./DefaultHeader";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`w-screen min-h-screen overflow-x-clip flex flex-col bg-[#01030B] text-white font-medium`}
    >
      <DefaultHeader />

      <div
        className={`grow flex flex-col items-center gap-[200px] md:mt-0 lg:-mt-12`}
      >
        {children}
      </div>

      <PublicFooter />
    </div>
  );
};

export default DefaultLayout;
