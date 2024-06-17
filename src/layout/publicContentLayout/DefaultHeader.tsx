import {
  MENU_ITEMS,
  MnuItemsEnum,
} from "../../constatns/landingPage.constants";
import { ROUTE } from "../../constatns/general.constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleX, Menu } from "lucide-react";
// import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Drawer } from "vaul";

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
        router.push(ROUTE.faq);
        break;
      default:
        router.push(ROUTE.landing);
    }
  };

  return (
    <div className="lg:!container z-50 sticky top-0 lg:top-6">
      <div
        className="lg:rounded-3xl mt-0 flex lg:mx-10 2xl:mx-auto 2xl:w-full items-center px-6 md:px-12 py-7 justify-between bg-[#01061D]/50 backdrop-blur-lg">
        <Link href={"/"}>
          <Image
            src={"/tensurf.png"}
            width={90}
            height={10}
            alt="Tensurf"
            className="rounded"
          />
        </Link>

        <div className="hidden items-center text-center gap-10 lg:flex lg:flex-1 lg:justify-center">
          {MENU_ITEMS.map((item: any, index: number) => (
            <a
              id={item.title}
              key={index}
              className="flex items-center gap-1"
              href={item.url}
            >
              {<item.icon className="text-white" />}
              <div>{item.title}</div>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <>
            {/*<Button*/}
            {/*  onClick={() => setShouldShowSignInSignUpModal({ signUp: false, signIn: true })}*/}
            {/*  variant={'ghost'}*/}
            {/*  className='hover:bg-inherit hover:text-neutral-300 gap-1'*/}
            {/*>*/}
            {/*  <UserIcon />*/}
            {/*  Login*/}
            {/*</Button>*/}

            <a
              className={"flex"}
              href={process.env.NEXT_PUBLIC_SIGNUP_URL}
              target="_blank"
            >
              <Button className="flex gap-2 rounded-3xl drop-shadow-[3px_5px_24px_#082FDF] py-6">
                <p>Get Started</p>
                <ArrowRight size={20} strokeWidth={2} />
              </Button>
            </a>
            <Drawer.Root direction="right">
              <Drawer.Trigger asChild>
                <Button
                  className={
                    "block lg:hidden bg-transparent p-2 hover:bg-[#33415C33]/60 rounded-full"
                  }
                >
                  <Menu size={24} strokeWidth={1.5} />
                </Button>
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay
                  className="fixed inset-0 bg-blend-overlay bg-[#01061D]/50 backdrop-blur-lg z-[999] w-full h-full" />
                <Drawer.Content
                  className="bg-[#01030B] flex flex-col gap-6 items-end rounded-t-[10px] h-full w-[300px] mt-24 fixed bottom-0 right-0 z-[1000]">
                  <Drawer.Close>
                    <Button variant={"link"}>
                      <CircleX color="#ffffff" strokeWidth={1.5} />
                    </Button>
                  </Drawer.Close>
                  <div className="w-full flex flex-col gap-6 items-center">
                    <Link href={"/"}>
                      <Image
                        src={"/tensurf.png"}
                        width={90}
                        height={10}
                        alt="Tensurf"
                        className="rounded"
                      />
                    </Link>
                    <span className={"h-[1px] bg-white w-3/4"}></span>
                    {MENU_ITEMS.map((item, index) => (
                      <div key={index}>
                        <div
                          id={item.title}
                          className="flex items-center justify-center gap-1 cursor-pointer w-full"
                          onClick={() => {
                            onMenuItemClickHandler(item.title);
                          }}
                        >
                          {<item.icon className="text-white" />}
                          <div>
                            <p className={"text-white text-base"}>{item.title}</p>
                          </div>
                        </div>
                        <span className={"h-[1px] bg-white w-3/4"}></span>
                      </div>
                    ))}
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </>
        </div>
      </div>
    </div>
  );
};
