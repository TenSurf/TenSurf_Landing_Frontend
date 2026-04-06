import React from "react";

const ToolCardTitleIcon = ({className}: {className?: string}) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M16.0013 2.66699V29.3337M25.4294 6.57224L6.57321 25.4284M29.3346 16.0003H2.66797M25.4294 25.4284L6.57321 6.57224"
        stroke="#ADB5BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ToolCardTitleIcon;