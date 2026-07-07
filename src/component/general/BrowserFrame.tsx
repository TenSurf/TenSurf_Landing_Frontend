import React from "react";
import Image from "next/image";
import Lightbox from "@/component/general/Lightbox";

/**
 * Browser-chrome frame around a product screenshot.
 * Screenshots are captured at 16:10 (1600x1000), so the media box keeps that ratio.
 * The frame is click-to-zoom: tapping it opens the screenshot full-screen (see Lightbox).
 */
const BrowserFrame = ({
  image,
  alt,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}: {
  image: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) => {
  return (
    <Lightbox src={image} alt={alt}>
      <div className="relative rounded-xl overflow-hidden bg-[#00041A] border border-white/10 shadow-[0_20px_60px_-20px_rgba(8,47,223,0.35)] transition-shadow hover:shadow-[0_24px_72px_-16px_rgba(8,47,223,0.5)]">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/25" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/25" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/25" />
          <span className="mx-auto text-xs text-muted-foreground font-mono">brain.tensurf.ai</span>
        </div>
        <div className="relative aspect-[16/10]">
          <Image src={image} alt={alt} fill className="object-cover object-top" sizes={sizes} priority={priority} />
        </div>
      </div>
    </Lightbox>
  );
};

export default BrowserFrame;
