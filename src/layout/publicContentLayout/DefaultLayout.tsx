import { type ReactNode, type RefObject } from "react";
import { PublicFooter } from "./PublicFooter";
import { DefaultHeader } from "./DefaultHeader";

export const DefaultLayout = ({
  children,
  headerRef,
}: {
  children: ReactNode;
  headerRef?: RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      className={`w-screen min-h-screen overflow-x-clip flex flex-col bg-[#000] text-white font-medium`}
    >
      <DefaultHeader headerRef={headerRef} />

      <div className={`grow flex flex-col items-center gap-[200px]`}>
        {children}
      </div>

      <PublicFooter />
    </div>
  );
};

export default DefaultLayout;
