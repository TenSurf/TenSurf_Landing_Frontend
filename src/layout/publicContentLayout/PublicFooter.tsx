import { COPYRIGHT, FOOTER_MENU_COLS, COMPANY_LOCATION } from "@/constatns/landingPage.constants";
import { TENSURF_CONTACT } from "@/constatns/general.constants";
import { NT_DISCLOSURES, NT_PARTNER_LINKS } from "@/constatns/ninjatrader.constants";
import MailIcon from "../../icons/MailIcon";
import { NewsLetter } from "./NewsLetter";
import Link from "next/link";
import { TensurfLogo } from "@/components/TensurfLogo";
import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";

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
            <div className="font-normal text-lg text-muted-foreground">
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
                    target={item.path.startsWith("http") ? "_blank" : undefined}
                    key={index}
                    className="text-sm font-normal flex gap-2 cursor-pointer hover:underline"
                    rel={item.path.startsWith("http") ? "noreferrer" : undefined}
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

      {/* Partner Logos Section */}
      <div className="flex flex-row items-center justify-center gap-6 py-8 border-t border-border">
        <div className="flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full px-4 py-2">
          <ShieldCheck className="w-4 h-4 text-[#10B981]" />
          <span className="text-sm text-[#ADB5BD]">Verified NinjaTrader Vendor</span>
        </div>
        <span className="text-sm text-muted-foreground leading-none">Powered by</span>
        <a
          href={NT_PARTNER_LINKS.ninjatrader}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80 transition-opacity flex items-center"
        >
          <Image
            src="/images/partners/ninjatrader-logo.png"
            alt="NinjaTrader"
            width={140}
            height={35}
            className="dark:brightness-0 dark:invert"
            style={{ height: '28px', width: 'auto' }}
          />
        </a>
        <a
          href={NT_PARTNER_LINKS.kinetick}
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-80 transition-opacity flex items-center"
        >
          <Image
            src="/images/partners/kinetick-logo.png"
            alt="Kinetick"
            width={120}
            height={35}
            className="dark:brightness-0 dark:invert"
            style={{ height: '28px', width: 'auto' }}
          />
        </a>
      </div>

      {/* Risk Disclosure Section */}
      <div className="py-6 border-t border-border">
        <p className="text-[10px] leading-relaxed text-muted-foreground text-center">
          {NT_DISCLOSURES.futuresRisk}
        </p>
        <p className="text-[10px] leading-relaxed text-muted-foreground text-center mt-4">
          {NT_DISCLOSURES.ninjatraderTrademark}
        </p>
      </div>

      <div
        className="flex flex-col lg:flex-row justify-around gap-4 items-center sm:border-t-[1px] sm:border-t-border sm:py-6 text-xs font-normal">
        <div className={'border-t-[1px] border-t-border pt-6 w-full sm:border-none sm:pb-0 sm:pt-0 sm:w-fit flex flex-col sm:flex-row sm:items-center gap-2'}>
            <h6>{COPYRIGHT}</h6>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {COMPANY_LOCATION}
            </span>
          </div>
        <div className="flex gap-8 border-t-[1px] border-t-border pt-6 pb-4 w-full sm:border-none sm:pb-0 sm:pt-0 sm:w-fit">
          <a
            href={TENSURF_CONTACT.mailToLink}
            className="flex items-center gap-1 group"
          >
            <MailIcon />
            <div className="group-hover:underline"><h6>{TENSURF_CONTACT.mail}</h6></div>
          </a>
        </div>
      </div>
    </div>
  );
};
