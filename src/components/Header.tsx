import React from "react";
import Logo from "../../public/Logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="pl-3 pr-5 flex items-center justify-between lg:py-1 lg:border-b-[1px] lg:border-[#222222]">
      <Image alt="Logo da empresa" src={Logo} />
      <div className="w-6 h-6 flex flex-col gap-[6px] opacity-60">
        <HamburguerStyle />
        <HamburguerStyle />
        <HamburguerStyle />
      </div>
    </div>
  );
};

const HamburguerStyle = () => {
  return <div className="h-[2px] rounded-2xl bg-white"></div>;
};
