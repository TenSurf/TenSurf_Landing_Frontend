"use client"
import React from "react";

const PlayIcon = ({onClick}: {onClick?: () => void}) => {
  return (
    <svg onClick={onClick} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_33_2686)">
        <rect width="64" height="64" rx="32" fill="#DEE2E6" />
        <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="#F8F9FA" />
        <path
          d="M25.667 23.6528C25.667 22.358 25.667 21.7105 25.937 21.3536C26.1722 21.0427 26.5317 20.8503 26.9209 20.8271C27.3676 20.8004 27.9063 21.1595 28.9837 21.8778L43.0044 31.225C43.8947 31.8185 44.3398 32.1152 44.4949 32.4892C44.6305 32.8163 44.6305 33.1838 44.4949 33.5108C44.3398 33.8848 43.8947 34.1815 43.0044 34.775L28.9837 44.1222C27.9063 44.8405 27.3676 45.1996 26.9209 45.1729C26.5317 45.1497 26.1722 44.9573 25.937 44.6464C25.667 44.2895 25.667 43.6421 25.667 42.3472V23.6528Z"
          fill="#495057" />
      </g>
      <defs>
        <filter id="filter0_b_33_2686" x="-44" y="-44" width="152" height="152" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="22" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_33_2686" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_33_2686" result="shape" />
        </filter>
      </defs>
    </svg>

  );
};

export default PlayIcon;