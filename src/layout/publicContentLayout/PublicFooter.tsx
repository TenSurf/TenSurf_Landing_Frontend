import {
  COPYRIGHT,
  FOOTER_MENU_COLS,
} from "../../constatns/landingPage.constants";
import PhoneIcon from "../../icons/PhoneIcon";
import { TENSURF_CONTACT } from "../../constatns/general.constants";
import MailIcon from "../../icons/MailIcon";
import { GradientShape } from "../../component/general/GradientShape";
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
          className="z-0 absolute left-32 w-[200px] h-[150px] rounded-full"
        ></div>
        <div className="flex flex-col gap-4">
          <TensurfLogo />
          <div>
            <div className="text-lg font-bold">Newsletter</div>
            <div className="font-normal text-sm">
              Stay updated with the latest products and insights
            </div>
          </div>
          <NewsLetter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-6">
          {FOOTER_MENU_COLS.map((column, index: number) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="text-lg font-bold">{column.title}</div>
              <div className="flex flex-col gap-4">
                {column.items.map((item, index) => (
                  <Link
                    href={item.path}
                    target={item.path.includes("#") ? undefined : "_blank"}
                    key={index}
                    className="text-sm font-normal flex gap-2 cursor-pointer hover:underline"
                    rel="noreferrer"
                  >
                    {item.icon ? <item.icon /> : null}
                    <div>{item.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row justify-around gap-4 items-center border-t-[1px] border-t-white/40 py-2 text-xs font-normal">
        <div>{COPYRIGHT}</div>
        <div className="flex gap-8">
          {/*<a href={TENSURF_CONTACT.phoneCallLink} className='flex items-center gap-1 group'>*/}
          {/*  <PhoneIcon />*/}
          {/*  <div className='group-hover:underline'>{TENSURF_CONTACT.phone}</div>*/}
          {/*</a>*/}
          <a
            href={TENSURF_CONTACT.mailToLink}
            className="flex items-center gap-1 group"
          >
            <MailIcon />
            <div className="group-hover:underline">{TENSURF_CONTACT.mail}</div>
          </a>
        </div>
      </div>
      {/* <div className='w-full flex justify-center top-0'>
        <GradientShape />
      </div> */}
    </div>
  );
};
