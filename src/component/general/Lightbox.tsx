"use client";

import Image from "next/image";
import { X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  /** Extra classes for the clickable trigger wrapper. */
  className?: string;
}

/**
 * Wraps any trigger content and, on click, opens the given image full-screen
 * over a dimmed, blurred backdrop. Closes on backdrop click, the close button,
 * or the Escape key. Used to make homepage product screenshots zoomable.
 */
const Lightbox = ({ src, alt, children, className = "" }: LightboxProps) => {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false); // drives the fade/scale transition

  const close = useCallback(() => {
    setShown(false);
    // let the fade-out play before unmounting the overlay
    window.setTimeout(() => setOpen(false), 200);
  }, []);

  useEffect(() => {
    if (!open) return;
    const raf = requestAnimationFrame(() => setShown(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${alt}`}
        className={`block w-full cursor-zoom-in ${className}`}
      >
        {children}
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-sm transition-opacity duration-200 ${
              shown ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[101] flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1000}
              sizes="95vw"
              onClick={(e) => e.stopPropagation()}
              className={`max-h-[90vh] max-w-[95vw] cursor-default rounded-lg object-contain shadow-2xl transition-transform duration-200 ${
                shown ? "scale-100" : "scale-95"
              }`}
              style={{ width: "auto", height: "auto" }}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default Lightbox;
