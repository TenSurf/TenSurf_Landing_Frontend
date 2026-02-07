"use client";
import { useState, useRef } from "react";
import { type IPlan } from "../../../types/general.types";
import { Plan } from "./Plan";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Code2, FileJson, FileText, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

const SETS = 9; // Many duplicate sets for seamless infinite scroll
const MID_SET = 4; // Middle set index

export const PlansSection = (props: { data: IPlan[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const len = props.data?.length || 4;

  // Re-center to middle set when drifting too far from center (instant, no animation)
  const handleTransitionEnd = (swiper: SwiperType) => {
    const idx = swiper.activeIndex;
    const offset = idx % len;
    const currentSet = Math.floor(idx / len);

    // If more than 2 sets away from middle, silently re-center
    if (currentSet <= 1 || currentSet >= SETS - 2) {
      swiper.slideTo(MID_SET * len + offset, 0);
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex % len);
  };

  return (
    <div
      id="Planss"
      className="flex flex-col gap-20 text-white w-full items-center relative z-10 scroll-m-20 max-w-screen-2xl min-h-screen my-32 px-8 sm:px-0"
    >
      <div className="flex flex-col gap-6 text-center items-center w-full">
        <div className="text-5xl md:text-7xl font-semibold">Plans</div>
      </div>

      {/* Deliverables Block */}
      <div className="w-full max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          What you get with every strategy
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-sm font-semibold text-center">NinjaScript Code</div>
            <div className="text-xs text-gray-400 text-center">Complete .cs file — compiles and runs in NinjaTrader. No editing needed.</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <FileJson className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-sm font-semibold text-center">Configuration File</div>
            <div className="text-xs text-gray-400 text-center">All tunable parameters in one place — stop loss, take profit, indicator settings. Tweak and re-backtest without re-generating.</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-sm font-semibold text-center">Strategy Summary</div>
            <div className="text-xs text-gray-400 text-center">Quick overview of what your strategy does — review at a glance before backtesting.</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-orange-400" />
            </div>
            <div className="text-sm font-semibold text-center">Documentation</div>
            <div className="text-xs text-gray-400 text-center">Detailed reference guide — logic explained, parameters documented, usage instructions included.</div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div
          style={{
            opacity: "0.5",
            background: "#2561FF",
            filter: "blur(250px)",
          }}
          className="pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 absolute w-[492px] h-[468px] rounded-full"
        ></div>

        {/* Plan name tabs */}
        <div className="flex justify-center gap-2 mb-6 px-4 flex-wrap relative z-10">
          {props.data?.map((item: IPlan, index: number) => (
            <button
              key={item.order_id}
              onClick={() => {
                swiperRef.current?.slideTo(MID_SET * len + index);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeIndex === index
                  ? "bg-primary text-white"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Desktop: Coverflow carousel */}
        <div className="hidden sm:block w-full relative">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Next plan"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={handleSlideChange}
            onSlideChangeTransitionEnd={handleTransitionEnd}
            effect="coverflow"
            wrapperClass="items-stretch"
            initialSlide={MID_SET * len}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 40,
              modifier: 4,
              slideShadows: false,
            }}
            slidesPerView={3}
            breakpoints={{
              0: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 300,
                  modifier: 1,
                  slideShadows: false,
                },
                slidesPerView: 1.5,
              },
              767: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 55,
                  modifier: 3,
                  slideShadows: false,
                },
                slidesPerView: 2,
              },
              1100: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 40,
                  modifier: 4,
                  slideShadows: false,
                },
                slidesPerView: 3.935,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            grabCursor
            spaceBetween={10}
            centeredSlides
            centerInsufficientSlides
            className="!pt-4 !overflow-visible"
          >
            {Array.from({ length: SETS }, (_, i) => i).map((setIdx) =>
              props.data?.map((item: IPlan, index: number) => {
                const slideIndex = setIdx * len + index;
                return (
                  <SwiperSlide
                    className="!h-auto transition-all"
                    key={`${setIdx}-${item.order_id}`}
                    onClick={() => swiperRef.current?.slideTo(slideIndex)}
                  >
                    {({ isActive }) => (
                      <Plan
                        className={isActive ? "bg-gradient-to-b from-[#00115E] to-[#0424B5]" : "bg-[#33415C]/20 cursor-pointer"}
                        plan={item}
                        isAnnuallyChecked={false}
                      />
                    )}
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="flex flex-col gap-8 w-full sm:hidden">
          {props.data?.map((item: IPlan, index: number) => (
            <Plan
              className={index === 0 ? "bg-gradient-to-b from-[#00115E] to-[#0424B5]" : "bg-[#33415C]/20"}
              key={item.order_id}
              plan={item}
              isAnnuallyChecked={false}
            />
          ))}
        </div>
      </div>

      {/* Footnote */}
      <div className="w-full max-w-3xl text-center">
        <p className="text-sm text-gray-400">
          * Each strategy generation counts toward your daily limit — including
          revisions or small changes to existing rules. Usage resets on a rolling 24-hour window.
        </p>
      </div>
    </div>
  );
};
