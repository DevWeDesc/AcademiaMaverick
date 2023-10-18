import Image from "next/image";
import React from "react";
import ImageBannerMobile from "../../public/ImageBannerMobile.png";

export const Banner = () => {
  return (
    <div>
      <div className="w-screen h-auto lg:hidden">
        <Image className="w-full" alt="" src={ImageBannerMobile} />
        <div className="relative bottom-10 flex flex-col items-center gap-1 p-5">
          <h2 className="text-2xl font-bold text-center max-w-[18rem]">
            Transforme seu Corpo e sua Vida!
          </h2>
          <p className="max-w-[22rem] text-center opacity-60 hover:opacity-90 transition-all">
            Alcance Seus Objetivos de Fitness na Nossa Academia Maverick
            Premium!
          </p>
          <button className="bg-[#252525] font-bold py-4 mt-8 w-full rounded-lg hover:opacity-90 transition-all">
            Iniciar
          </button>
        </div>
      </div>
    </div>
  );
};
