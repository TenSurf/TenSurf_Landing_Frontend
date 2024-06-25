import React from "react";

const SubtitleText = ({title}: {title: string}) => {
  return (
    <p className={'text-2xl sm:text-3xl md:text-5xl font-[playfair] text-[#D6E6FC]'}>{title}</p>
  );
};

export default SubtitleText;