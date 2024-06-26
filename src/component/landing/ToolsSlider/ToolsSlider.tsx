"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css/pagination";
import "swiper/css";
import ToolItem from "@/component/landing/ToolsSlider/ToolItem";
import QuoteItem from "@/component/landing/ToolsSlider/QuoteItem";
import { Controller , Mousewheel} from "swiper/modules";
import { TOOLS } from "@/constatns/toolsSlider.constants";
import GsapAnimation from "@/utils/GsapAnimation";

const ToolsSlider = () => {

  const [slide, setSlide] = useState(0);
  const [tool, setTool] = useState<SwiperType>();
  const [quote, setQuote] = useState<SwiperType>();

  const toolRef = useRef<SwiperRef>() as any;
  const quoteRef = useRef<SwiperRef>() as any;
  

  return (
    <GsapAnimation selector={"#toolsSlider"} fromVars={{y: 400 , rotate: -15}} toVars={{y: 0 , rotate: 0, duration: 1 , scrollTrigger: {start: "top bottom" , trigger: "#toolsSlider"}}}>
      <div
        className={"scroll-m-28 max-w-screen-2xl mx-auto w-full md:w-3/4 lg:w-full mb-12 relative lg:z-[100] bg-[#01030B] pl-6 my-24"}
        id={'toolsSlider'}>
        <div
          className="hidden lg:block absolute w-[8px] h-[300px] top-[10%] rounded-full left-0 overflow-hidden bg-[#2F51E9]/30">
          <div style={{ height: (((slide ?? 0) + 1) / 3) * 300 }}
               className={`bg-[#1F42E4] drop-shadow-[3px_5px_24px_#082FDF] w-full rounded-full transition-all`}></div>
        </div>
        <Swiper
          // onClick={onSlideClick}
          onInit={setTool}
          controller={{
            by: "container",
            control: quote
          }}
          modules={[Controller, Mousewheel]}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
            thresholdDelta: 1,
          }}
          onSlideChange={swiper => {
            console.log(swiper);
            setSlide(swiper.realIndex);
            // quoteRef.current?.swiper?.slideNext()
          }}
          direction={"vertical"}
          allowTouchMove={false}
          slidesPerView={1}
          spaceBetween={0}
          autoHeight
          ref={toolRef}
          draggable={false}
          grabCursor={false}
          breakpoints={{
            0: {
              direction: "horizontal",
              allowTouchMove: true,
              grabCursor: true
            },
            1024: {
              direction: "vertical"
            }
          }}
        >
          {TOOLS.map(val => (
            <SwiperSlide key={val.title} className={"!h-full"}>
              <ToolItem title={val.title} description={val.description} image={val.image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <hr className="h-px my-4 bg-[#495057] border-0" />
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[Controller]}
            onInit={setQuote}
            controller={{
              by: "container",
              control: tool
            }}
            draggable={false}
            grabCursor={false}
            allowTouchMove={false}
            spaceBetween={50}
            ref={quoteRef}
            breakpoints={{
              0: {
                allowTouchMove: true,
                grabCursor: true
              },
              1024: {
                allowTouchMove: false,
                grabCursor: false
              }
            }}
          >
            {TOOLS.map(val => (
              <SwiperSlide key={val.quoteTitle}>
                <QuoteItem quoteTitle={val.quoteTitle} name={val.quoteName} description={val.quoteDescription}
                           image={val.quoteImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:hidden w-full flex justify-center gap-1 items-center mt-4 md:mt-6">
          <span style={{ backgroundColor: slide == 0 ? "#CAD2FC" : "#343A40" }}
                className={"block w-[8px] h-[8px] rounded-full bg-[#CAD2FC]"}></span>
          <span style={{ backgroundColor: slide == 1 ? "#CAD2FC" : "#343A40" }}
                className={"block w-[8px] h-[8px] rounded-full bg-[#343A40]"}></span>
          <span style={{ backgroundColor: slide == 2 ? "#CAD2FC" : "#343A40" }}
                className={"block w-[8px] h-[8px] rounded-full bg-[#343A40]"}></span>
        </div>
      </div>
    </GsapAnimation>
  );
};

export default ToolsSlider;