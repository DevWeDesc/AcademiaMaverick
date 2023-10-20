"use client";
import React, { useState } from "react";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { Nav } from "./Nav";

export const Header = () => {
  const [openHamburguer, setOpenHamburguer] = useState(false);

  const handleOpenHamburguer = () => {
    openHamburguer ? setOpenHamburguer(false) : setOpenHamburguer(true);
  };

  return (
    <div className="fixed w-full z-10 top-0 bg-black pl-3 pr-5 flex items-center justify-between lg:px-20 lg:py-1 lg:border-b-[1px] lg:border-[#222222]">
      <Image alt="Logo da empresa" className="w-20" src={Logo} />
      <div
        onClick={handleOpenHamburguer}
        className="w-8 h-8 p-1 flex flex-col justify-center gap-[6px] opacity-60 lg:hidden"
      >
        <div
          className={`${
            openHamburguer
              ? "relative top-1 transition-all rotate-45"
              : "transition-all"
          }`}
        >
          <HamburguerStyle />
        </div>
        {!openHamburguer && <HamburguerStyle />}
        <div
          className={`${
            openHamburguer
              ? "relative bottom-1 transition-all rotate-[-45deg]"
              : "transition-all"
          }`}
        >
          <HamburguerStyle />
        </div>
      </div>
      <Nav HandleNavOpen={handleOpenHamburguer} navOpen={openHamburguer} />
    </div>
  );
};

const HamburguerStyle = () => {
  return <div className="h-[2px] rounded-2xl bg-white"></div>;
};
