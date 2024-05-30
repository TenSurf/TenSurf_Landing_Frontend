"use client";
import { type RefObject, useEffect, useState } from "react";
import Switch from "../../general/Switch";
import Image from "next/image";
import sphereImgSrc from "../../../../public/images/sphere.webp";
import { type IPlan } from "../../../types/general.types";
import { Plan } from "./Plan";
import { HttpMethod, sendRequest } from "@/helpers/http-request";
import { BackendUrls } from "@/helpers/backend-urls";

import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";

export const PlansSection = (
  {
    PlansRef,
    mode = "landingPage"
  }: {
    PlansRef?: RefObject<HTMLDivElement>;
    mode?: "landingPage" | "plansPage";
  }) => {

  const [isAnnuallyChecked, setIsAnnuallyChecked] = useState(true);
  const [plans, setPlans] = useState<{ status: "reject" | "pending" | "fulfilled"; data?: IPlan[] }>({
    status: "pending",
    data: []
  });
  const [swiper, setSwiper] = useState<SwiperType>();

  useEffect(() => {
    setPlans({ status: "pending" });
    sendRequest(BackendUrls.plans, HttpMethod.GET)
      .then(res => {
        let data = Object.values(res.data)
          .map((val: any): IPlan => {
            return {
              title: val.name,
              description: val.description,
              buttonLabel: val.is_coming_soon ? "Contact Us" : "Start Now",
              features: val.features.map((feature: any) => ({ title: feature.name })),
              priceAnnually: val.year_unit_amount / 100,
              priceMonthly: val.month_unit_amount / 100,
              is_coming_soon: val.is_coming_soon,
              month_price_id: val.month_price_id,
              year_price_id: val.year_price_id,
              is_free: val.is_free,
              order_id: val.order_id,
              month_currency: val?.month_currency,
              year_currency: val?.year_currency
            };
          })
          .sort((a, b) => a.order_id - b.order_id);

        setPlans({ status: "fulfilled", data });
      })
      .catch(err => {
        console.log(err);
        setPlans({ status: "reject" });
      });
  }, []);

  // *.*.*.*.*.*.*.*.*. RETURN ↓•↓•↓
  return (
    <div
      ref={PlansRef}
      id="Planss"
      className="flex flex-col gap-10 text-white w-full items-center relative z-10 scroll-m-20 max-w-screen-2xl min-h-screen"
    >
      <div className="flex flex-col gap-6 text-center items-center w-full">
        <div className={`${mode === "landingPage" ? "text-3xl md:text-4xl lg:text-6xl font-semibold " : "pageTitle"}`}>
          Plans
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-12 flex-col-reverse md:flex-row w-full">
          <div className="flex items-center gap-3 font-bold text-base">
            <div>Monthly</div>
            <Switch checked={isAnnuallyChecked} onChange={() => setIsAnnuallyChecked(prev => !prev)} />
            <div>Annually</div>
          </div>
          <div className="rounded-lg bg-[#2C2C2C] py-2 px-3">
            Get 16% off equivalent to 2 free months with annual subscription
          </div>
        </div>
      </div>

      <div className={"w-full"}>
        <Swiper
          onSwiper={swiper => setSwiper(swiper)}
          effect={'coverflow'}
          initialSlide={3}
          wrapperClass={'items-stretch'}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 0,
            modifier: 1,
            scale: 1,
          }}
          slidesPerView={5}
          breakpoints={{
            0: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
              },
              slidesPerView: 1.5
            },
            767: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 55,
                modifier: 3,
              },
              slidesPerView: 2
            },
            1100: {
              coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 55,
                modifier: 3,
              },
              slidesPerView: 4
            }
          }}
          modules={[EffectCoverflow]}
          grabCursor
          spaceBetween={10}
          centeredSlides
          rewind
          loop
        >
          {plans?.data?.map((item: IPlan, index: number) => (
            <SwiperSlide className={'!h-auto transition-all'} key={item.order_id}>
              {({isActive}) => (
                <Plan className={isActive ? "grayscale-0" : "grayscale"} key={index} plan={item} isAnnuallyChecked={isAnnuallyChecked} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {/*<div className="flex flex-col lg:flex-row h-full justify-center gap-4 flex-wrap">*/}
        {/*  {plans?.data?.slice(4 ,5)?.map((item: IPlan, index: number) => (*/}
        {/*    <Plan key={index} plan={item} isAnnuallyChecked={isAnnuallyChecked} />*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
      <div className="absolute -z-10 top-[450px] bg-[#000]">
        <Image src={sphereImgSrc} alt="sphere image" className="mix-blend-hard-light" />
      </div>
    </div>
  );
};