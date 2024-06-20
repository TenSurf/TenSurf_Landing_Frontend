"use client";
import { useEffect, useState } from "react";
import Switch from "../../general/Switch";
import Image from "next/image";
import sphereImgSrc from "../../../../public/images/sphere.webp";
import { type IPlan } from "../../../types/general.types";
import { Plan } from "./Plan";
import { HttpMethod, sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import { Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PlansSection = (props: { data: IPlan[] }) => {
  const [isAnnuallyChecked, setIsAnnuallyChecked] = useState(true);

  console.log(props.data);



  // useEffect(() => {
  //   sendRequest(BackendUrls.plans, HttpMethod.GET)
  //     .then((res) => {
  //       let data = Object.values(res.data)
  //         .map((val: any): IPlan => {
  //           return {
  //             title: val.name,
  //             description: val.description,
  //             buttonLabel: val.is_coming_soon ? "Contact Us" : "Start Now",
  //             features: val.features.map((feature: any) => ({
  //               title: feature.name,
  //             })),
  //             priceAnnually: val.year_unit_amount / 100,
  //             priceMonthly: val.month_unit_amount / 100,
  //             is_coming_soon: val.is_coming_soon,
  //             month_price_id: val.month_price_id,
  //             year_price_id: val.year_price_id,
  //             is_free: val.is_free,
  //             order_id: val.order_id,
  //             month_currency: val?.month_currency,
  //             year_currency: val?.year_currency,
  //           };
  //         })
  //         .sort((a, b) => a.order_id - b.order_id);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div
      id="Planss"
      className="flex flex-col gap-20 text-white w-full items-center relative z-10 scroll-m-20 max-w-screen-2xl min-h-screen my-32"
    >
      <div className="flex flex-col gap-6 text-center items-center w-full">
        <div
          className={`text-5xl md:text-7xl font-semibold`}
        >
          Plans
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-12 flex-col w-full">
          <div className="bg-[#040B1C] flex items-center gap-2 border-[1px] border-[#181F30] px-2 rounded-full 3xl py-2">
            <button className={'bg-primary rounded-full p-2'}>
              <Percent />
            </button>
            <p>Get 16% off equivalent to 2 free months with annual subscription</p>
          </div>
          <div className="flex items-center gap-3 font-bold text-base">
            <div className={!isAnnuallyChecked ? "" : 'text-muted-foreground'}>Monthly</div>
            <Switch
              checked={isAnnuallyChecked}
              onChange={() => setIsAnnuallyChecked((prev) => !prev)}
            />
            <div className={isAnnuallyChecked ? "" : 'text-muted-foreground'}>Annually</div>
          </div>
        </div>
      </div>

      <div className={"w-full"}>
        <div
          style={{
            opacity: "0.5",
            background: "#2561FF",
            filter: "blur(250px)"
          }}
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 absolute w-[492px] h-[468px] rounded-full"
        ></div>
        <Swiper
          className={'hidden sm:block'}
          effect={"coverflow"}
          initialSlide={3}
          wrapperClass={"items-stretch"}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 0,
            modifier: 1,
            scale: 1,
          }}
          slidesPerView={3}
          breakpoints={{
            0: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
              },
              slidesPerView: 1.5,
            },
            767: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 55,
                modifier: 3,
              },
              slidesPerView: 2,
            },
            1100: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 55,
                modifier: 4,
              },
              slidesPerView: 4,
            },
          }}
          modules={[EffectCoverflow]}
          grabCursor
          spaceBetween={10}
          centeredSlides
          // centeredSlidesBounds
          centerInsufficientSlides
          rewind
          loop
        >
          {props.data?.map((item: IPlan, index: number) => (
            <SwiperSlide
              className={"!h-auto transition-all"}
              key={item.order_id}
            >
              {({ isActive }) => (
                <Plan
                  className={isActive ? "bg-gradient-to-b from-[#00115E] to-[#0424B5]" : "bg-[#33415C]/20"}
                  key={index}
                  plan={item}
                  isAnnuallyChecked={isAnnuallyChecked}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex-flex-col w-full sm:hidden">
          {props.data?.map((item: IPlan, index: number) => (
            <Plan
              className={index == 0 ? "bg-gradient-to-b from-[#00115E] to-[#0424B5]" : "bg-[#33415C]/20"}
              key={index}
              plan={item}
              isAnnuallyChecked={isAnnuallyChecked}
            />
          ))}
        </div>
        {/* <div className="flex flex-col lg:flex-row h-full justify-center gap-4 flex-wrap">
          {props.data?.slice(4, 5)?.map((item: IPlan, index: number) => (
            <Plan
              key={index}
              plan={item}
              isAnnuallyChecked={isAnnuallyChecked}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};
