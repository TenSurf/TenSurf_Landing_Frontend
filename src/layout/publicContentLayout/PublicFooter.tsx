import { COPYRIGHT, FOOTER_MENU_COLS } from "@/constatns/landingPage.constants";
import { TENSURF_CONTACT } from "@/constatns/general.constants";
import MailIcon from "../../icons/MailIcon";
import { NewsLetter } from "./NewsLetter";
import Link from "next/link";
import { TensurfLogo } from "@/components/TensurfLogo";

export const PublicFooter = () => {
  return (
    <div className="relative px-6 w-full max-w-screen-xl mx-auto">
      <div className="z-50 flex flex-col md:flex-row justify-between gap-6 w-full mx-auto">
        <div
          style={{
            opacity: "0.8",
            background: "#343A40",
            filter: "blur(100px)"
          }}
          className="z-0 absolute left-28 w-[100px] h-[100px] rounded-full"
        ></div>
        <div className="flex flex-col gap-8">
          <TensurfLogo />
          <div>
            <div className="text-xl font-bold"><h6>Newsletter</h6></div>
            <div className="font-normal text-lg text-[#6C757D]">
              <p>Stay updated with the latest products and insights</p>
            </div>
          </div>
          <NewsLetter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-6">
          {FOOTER_MENU_COLS.map((column, index: number) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="text-lg font-bold"><h6>{column.title}</h6></div>
              <div className="flex flex-wrap md:flex-col gap-4">
                {column.items.map((item, index) => (
                  <Link
                    href={item.path}
                    target={item.path.includes("#") ? undefined : "_blank"}
                    key={index}
                    className="text-sm font-normal flex gap-2 cursor-pointer hover:underline"
                    rel="noreferrer"
                  >
                    {item.icon ? <item.icon /> : null}
                    <div><p>{item.title}</p></div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row justify-around gap-4 items-center sm:border-t-[1px] sm:border-t-white/40 sm:py-6 text-xs font-normal">
        <div className={'border-t-[1px] border-t-white/40 pt-6 w-full sm:border-none sm:pb-0 sm:pt-0 sm:w-fit'}><h6>{COPYRIGHT}</h6></div>
        <div className="flex gap-8 border-t-[1px] border-t-white/40 pt-6 pb-4 w-full sm:border-none sm:pb-0 sm:pt-0 sm:w-fit">
          {/*<a href={TENSURF_CONTACT.phoneCallLink} className='flex items-center gap-1 group'>*/}
          {/*  <PhoneIcon />*/}
          {/*  <div className='group-hover:underline'>{TENSURF_CONTACT.phone}</div>*/}
          {/*</a>*/}
          <a
            href={TENSURF_CONTACT.mailToLink}
            className="flex items-center gap-1 group"
          >
            <MailIcon />
            <div className="group-hover:underline"><h6>{TENSURF_CONTACT.mail}</h6></div>
          </a>
        </div>
      </div>
      {/* <div className='w-full flex justify-center top-0'>
        <GradientShape />
      </div> */}
    </div>
  );
};
