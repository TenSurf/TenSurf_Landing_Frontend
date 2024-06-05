"use client";
import React, { MutableRefObject, ReactNode, RefObject } from "react";
import TweenVars = gsap.TweenVars;
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapProvider = ({ selector, toVars, fromVars, children , scope}: {
  children: ReactNode,
  selector: string | HTMLElement | null,
  fromVars: TweenVars,
  toVars: TweenVars,
  scope?: string | HTMLElement
}) => {
  useGSAP(() => {
    gsap.fromTo(selector, fromVars, toVars);
  } , {scope: scope});

  return (
    <>
      {children}
    </>
  );
};

export default GsapProvider;