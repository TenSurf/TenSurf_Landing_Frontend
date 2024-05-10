import { HERO_SECTION } from "../../../constatns/landingPage.constants";
import ChevronDownIcon from "../../../icons/ChevronDownIcon";
import { type FC, type RefObject, useState, useEffect } from "react";
import { AnimateLight } from "./AnimateLight";
import { ROUTE } from "../../../constatns/general.constants";
// import { useRouter } from 'next/router';
import TenSurfModal from "../../general/TenSurfModal";
import { useRouter } from "next/navigation";
import { getToken } from "@/helpers/auth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface IProps {
  viewPortHeight?: number;
  headerHeight?: number;
  productsRef: RefObject<HTMLDivElement>;
}

export const HeroSection: FC<IProps> = ({
  viewPortHeight,
  headerHeight,
  productsRef,
}) => {
  const [shouldShowSignInSignUpModal, setShouldShowSignInSignUpModal] =
    useState({ signUp: false, signIn: false });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const animateLights = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const router = useRouter();
  return (
    <div
      style={{ height: Number(viewPortHeight) - Number(headerHeight) + "px" }}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden h-screen"
    >
      <div className="relative z-10 flex gap-14 flex-col items-center text-center bottom-6 max-w-screen-xl">
        <h1 className="text-primaryGradient staticPageTitle">
          {HERO_SECTION.title}
        </h1>
        <ul className={"w-full px-6 list-disc text-left"}>
          {HERO_SECTION.items.map((val) => (
            <li key={val}>
              <h4 className={"font-light text-2xl lg:text-3xl"}>{val}</h4>
            </li>
          ))}
        </ul>
        {/*<h2 className='text-md md:text-2xl font-semibold mt-4 mb-6 leading-6 md:leading-8'>*/}
        {/*  {HERO_SECTION.description}*/}
        {/*</h2>*/}
        <div className="font-bold md:font-extrabold text-lg md:text-xl font-normal">
          {HERO_SECTION.description2}
        </div>
        <a href={process.env.NEXT_PUBLIC_HUB_URL}>
          <Button
            // onClick={
            //   () =>
            //     isLoggedIn
            //       ? router.push(ROUTE.chart)
            //       : setShouldShowSignInSignUpModal({
            //           signUp: true,
            //           signIn: false,
            //         })
              // isLoggedIn ? router.push(ROUTE.chart) : toast.error('To register, contact TenSurf support')
            // }
            className="w-52 h-16 bg-primary font-bold text-lg"
          >
            Go to Tensurf Hub
          </Button>
        </a>
      </div>

      <ChevronDownIcon
        onClick={() => {
          productsRef?.current?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute z-10 bottom-8 h-8 w-8 animate-bounce cursor-pointer"
      />

      <div className="absolute z-0 h-full w-full items-stretch flex-wrap gap-y-[20000px] justify-between flex gap-[200px] max-w-[90%]">
        {animateLights.map((light, index) => (
          <AnimateLight key={index} index={index} />
        ))}
      </div>
    </div>
  );
};
