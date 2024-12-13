import React from "react";
import TypingAnimation from "./TypingAnimation";

const HeroTitle = () => {
  return (
    <div className="flex flex-col items-center pt-32 px-8 text-center">
      <h1 className="text-white text-[12rem] font-bold tracking-wider font-serif">
        Orpheo Digital
      </h1>
      <p className="text-white text-3xl font-light mt-4 tracking-widest">
        TRANSFORMANDO IDEIAS EM EXPERIÊNCIAS DIGITAIS EXTRAORDINÁRIAS
      </p>
      <TypingAnimation />
    </div>
  );
};

export default HeroTitle;
