"use client";
import React, { MutableRefObject, ReactNode, RefObject } from "react";
import TweenVars = gsap.TweenVars;
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapProvider = ({ selector, toVars, fromVars, children }: {
  children: ReactNode,
  selector: string | HTMLElement | null,
  fromVars: TweenVars,
  toVars: TweenVars
}) => {
  useGSAP(() => {
    gsap.fromTo(selector, fromVars, toVars);
  });

  return (
    <>
      {children}
    </>
  );
};

export default GsapProvider;