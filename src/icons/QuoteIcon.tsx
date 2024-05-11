import React from "react";
import { cn } from "@/lib/utils";

const QuoteIcon = ({className}: {className?: string}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("lucide lucide-message-square-quote" , className)}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 12a2 2 0 0 0 2-2V8H8" />
      <path d="M14 12a2 2 0 0 0 2-2V8h-2" />
    </svg>
  );
};

export default QuoteIcon;