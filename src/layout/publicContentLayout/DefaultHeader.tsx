import { type RefObject } from "react";
import { MENU_ITEMS, MnuItemsEnum } from "../../constatns/landingPage.constants";
import { ROUTE } from "../../constatns/general.constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const DefaultHeader = () => {

  const router = useRouter();

  const onMenuItemClickHandler = (menuTitle: string) => {
    switch (menuTitle) {
      case MnuItemsEnum.products:
        router.push(ROUTE.landingProducts);
        break;
      case MnuItemsEnum.services:
        router.push(ROUTE.landingProducts);
        break;
      case MnuItemsEnum.plans:
        window.open((process.env.NEXT_PUBLIC_HUB_URL as string) + "/plans");
        break;
      case MnuItemsEnum.team:
        router.push(ROUTE.team);
        break;
      case MnuItemsEnum.contact:
        router.push(ROUTE.contactUs);
        break;
      case MnuItemsEnum.aboutUs:
        router.push(ROUTE.landingAboutUs);
        break;
      case MnuItemsEnum.faq:
        router.push(ROUTE.landingFaq);
        break;
      default:
        router.push(ROUTE.landing);
    }
  };

  return (
    <div
      className="z-50 sticky top-0 flex items-center px-6 md:px-24 py-4 justify-between bg-[#121212]"
    >
      <Link href={"/"}>
        <Image
          src={"/tensurf.png"}
          width={148}
          height={10}
          alt="Tensurf"
          className="rounded"
        />
      </Link>

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
        <>
          {/*<Button*/}
          {/*  onClick={() => setShouldShowSignInSignUpModal({ signUp: false, signIn: true })}*/}
          {/*  variant={'ghost'}*/}
          {/*  className='hover:bg-inherit hover:text-neutral-300 gap-1'*/}
          {/*>*/}
          {/*  <UserIcon />*/}
          {/*  Login*/}
          {/*</Button>*/}

          <a href={process.env.NEXT_PUBLIC_SIGNUP_URL} target="_blank">
            <Button className="flex">Get Started</Button>
          </a>
        </>
      </div>
    </div>
  );
};
