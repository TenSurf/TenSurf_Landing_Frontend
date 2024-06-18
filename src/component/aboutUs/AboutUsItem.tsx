'use client'
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUsItem = () => {

  const timeline = useRef<any>();

  useGSAP(() => {
    timeline.current = gsap.timeline().to("#this-text" , {
      bottom: "unset" , top: 0,
    })

    ScrollTrigger.create({
      animation: timeline.current,
      trigger: ".item-image",
      start: "top 0%",
      end: "bottom 0%",
      scrub: 2,
      pin: true
    })
  })

  return (
    <div className={'w-full relative grid grid-cols-12 gap-8'}>
      <div className="col-span-5 relative h-full w-full">
        <p className={'absolute bottom-0 left-0'} id={'this-text'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam amet aspernatur assumenda atque aut
          deserunt distinctio eaque eius exercitationem facere fuga illo optio porro reiciendis, sapiente sequi suscipit
          totam.
        </p>
      </div>
      <div className="col-span-7 max-w-[700px] mx-auto relative pb-[90vh] w-full rounded-3xl overflow-hidden item-image">
        <Image src={'/images/about-us-1.png'} alt={'about us'} fill />
      </div>
    </div>
  );
};

export default AboutUsItem;