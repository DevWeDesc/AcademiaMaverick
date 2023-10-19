import Image from "next/image";
import React from "react";
import Logo from "../../public/LogoFooter.png";
import { schedulesData } from "../../data/data";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center py-8 gap-10 border-t-[2px] border-[#222222]">
      <Image alt="" className="object-contain" src={Logo} />
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-5 items-center">
          <h3 className="font-semibold">Horarios de Funcionamento</h3>
          {schedulesData.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="font-bold text-sm">{data.days}</p>
              <p className="font-semibold text-sm">{data.schedules}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center"></div>
      </div>
    </div>
  );
};
