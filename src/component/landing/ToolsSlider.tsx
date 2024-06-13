"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ToolItem from "@/component/landing/ToolsSlider/ToolItem";

const ToolsSlider = () => {

  const [slide, setSlide] = useState(0);
  const toolRef = useRef<SwiperRef>() as any;
  const quoteRef = useRef<SwiperRef>() as any;

  const onSlideClick = () => {
    toolRef.current.swiper.slideNext()
    quoteRef.current.swiper.slideNext()
  }

  return (
    <div className={"scroll-m-28 max-w-screen-2xl w-full mb-12 relative z-[100] bg-[#01030B] pl-6"}>
      <div className="absolute w-[8px] h-[300px] top-[20%] rounded-full left-0 overflow-hidden bg-[#2F51E9]/30">
        <div style={{ height: (((slide ?? 0) + 1) / 3) * 300 }}
             className={`bg-[#1F42E4] drop-shadow-[3px_5px_24px_#082FDF] w-full rounded-full transition-all`}></div>
      </div>
      <Swiper
        onSlideChange={swiper => {
          setSlide(swiper.realIndex)
          // quoteRef.current?.swiper?.slideNext()
        }}
        direction={"vertical"}
        allowTouchMove={false}
        slidesPerView={1}
        loop
        spaceBetween={100}
        autoHeight
        ref={toolRef}
        draggable={false}
        grabCursor={false}
      >
        <SwiperSlide className={"!h-fit"} onClick={onSlideClick}>
          <ToolItem />
        </SwiperSlide>
        <SwiperSlide className={"!h-fit"} onClick={onSlideClick}>
          <ToolItem />
        </SwiperSlide>
        <SwiperSlide className={"!h-fit"} onClick={onSlideClick}>
          <ToolItem />
        </SwiperSlide>
      </Swiper>
      <hr className="h-px my-8 bg-[#495057] border-0" />
      <div className="w-1/2">
        <Swiper
          draggable={false}
          grabCursor={false}
          allowTouchMove={false}
          spaceBetween={50}
          loop
          ref={quoteRef}
        >
          <SwiperSlide onClick={onSlideClick}>
            <div className="quote-1 flex flex-col gap-6">
              <div className="flex items-stretch gap-4">
                <Image className={'rounded-full shadow-md'} src={"/images/tools/korbs.png"} alt={"korbs"} width={80}
                       height={80} />
                <div className="flex flex-col justify-evenly">
                  <h5 className={'text-2xl'}>DR. Scott Miler</h5>
                  <h6 className={'text-lg'}>An upcoming user interface upgrade</h6>
                </div>
              </div>
              <p className={'text-xl'}>Utilizes statistical analysis to provide insights into market patterns and
                anomalies,
                enabling traders to make data-driven decisions.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={onSlideClick}>
            <div className="quote-1 flex flex-col gap-6">
              <div className="flex items-stretch gap-4">
                <Image className={'rounded-full shadow-md'} src={"/images/tools/korbs.png"} alt={"korbs"} width={80}
                       height={80} />
                <div className="flex flex-col justify-evenly">
                  <h5 className={'text-2xl'}>DR. Scott Miler</h5>
                  <h6 className={'text-lg'}>An upcoming user interface upgrade</h6>
                </div>
              </div>
              <p className={'text-xl'}>Utilizes statistical analysis to provide insights into market patterns and
                anomalies,
                enabling traders to make data-driven decisions.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={onSlideClick}>
            <div className="quote-1 flex flex-col gap-6">
              <div className="flex items-stretch gap-4">
                <Image className={'rounded-full shadow-md'} src={"/images/tools/korbs.png"} alt={"korbs"} width={80}
                       height={80} />
                <div className="flex flex-col justify-evenly">
                  <h5 className={'text-2xl'}>DR. Scott Miler</h5>
                  <h6 className={'text-lg'}>An upcoming user interface upgrade</h6>
                </div>
              </div>
              <p className={'text-xl'}>Utilizes statistical analysis to provide insights into market patterns and
                anomalies,
                enabling traders to make data-driven decisions.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ToolsSlider;