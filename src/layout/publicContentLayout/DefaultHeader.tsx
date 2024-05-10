import { type RefObject, useState, useMemo } from "react";
import {
  MENU_ITEMS,
  MnuItemsEnum,
} from "../../constatns/landingPage.constants";
import UserIcon from "../../icons/UserIcon";
import { ROUTE } from "../../constatns/general.constants";
import { useRouter } from "next/navigation";
import { getToken, removeToken } from "../../helpers/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export const DefaultHeader = ({
  headerRef,
}: {
  headerRef?: RefObject<HTMLDivElement>;
}) => {
  const [shouldShowSignInSignUpModal, setShouldShowSignInSignUpModal] =
    useState({ signUp: false, signIn: false });
  let token = useMemo(() => getToken(), []);

  const router = useRouter();

  const onMenuItemClickHandler = (menuTitle: string) => {
    switch (menuTitle) {
      case MnuItemsEnum.products:
        router.push(ROUTE.landingProducts);
        break;

      case MnuItemsEnum.plans:
        router.push(ROUTE.landingPlans);
        break;

      case MnuItemsEnum.team:
        router.push(ROUTE.landingTeam);
        break;
      case MnuItemsEnum.chart:
        if (token) {
          router.push(ROUTE.chart);
        } else {
          setShouldShowSignInSignUpModal({ signUp: false, signIn: true });
        }
        break;
      case MnuItemsEnum.contact:
        router.push(ROUTE.contactUs);
        break;

      default:
        router.push(ROUTE.landing);
    }
  };

  return (
    <div
      ref={headerRef}
      className="z-50 sticky top-0 flex items-center px-6 md:px-24 py-4 justify-between bg-[#121212]"
    >
      <Image
        src={"/tensurf.png"}
        width={148}
        height={10}
        alt="Tensurf"
        className="rounded"
      />

      <div className="hidden items-center gap-10 lg:flex">
        {MENU_ITEMS.map((item, index) => (
          <div
            id={item.title}
            key={index}
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => {
              onMenuItemClickHandler(item.title);
            }}
          >
            {<item.icon className="text-white" />}
            <div>{item.title}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {token ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <UserIcon className="w-6 h-6 border rounded-full" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark">
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(ROUTE.profileSetting);
                  }}
                >
                  Profile Setting
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(ROUTE.profileBilling);
                  }}
                >
                  Account and Billing
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    removeToken();
                    router.replace(ROUTE.home);
                    window.location?.reload();
                  }}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            {/*<Button*/}
            {/*  onClick={() => setShouldShowSignInSignUpModal({ signUp: false, signIn: true })}*/}
            {/*  variant={'ghost'}*/}
            {/*  className='hover:bg-inherit hover:text-neutral-300 gap-1'*/}
            {/*>*/}
            {/*  <UserIcon />*/}
            {/*  Login*/}
            {/*</Button>*/}

            <a href={process.env.NEXT_PUBLIC_SIGNUP_URL}>
              <Button className="flex">Get Started</Button>
            </a>
          </>
        )}
      </div>
    </div>
  );
};
