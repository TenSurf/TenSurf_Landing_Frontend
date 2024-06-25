import React from "react";

const SubtitleText = ({title}: {title: string}) => {
  return (
    <h5 className={'text-2xl sm:text-3xl md:text-5xl font-[playfair] text-[#D6E6FC]'}>{title}</h5>
  );
};

export default SubtitleText;