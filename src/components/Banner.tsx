import Image from "next/image";
import React from "react";
import ImageBannerMobile from "../../public/ImageBannerMobile.png";
import ImageBannerDektop from "../../public/ImageBannerDektop.png";

export const Banner = () => {
  return (
    <div>
      <div className="pt-[80px] lg:w-[98vw] lg:pt-[130px] w-screen h-auto lg:flex lg:flex-row bg-black">
        <Image className="w-full lg:hidden" alt="" src={ImageBannerMobile} />
        <Image
          className="hidden lg:relative lg:block w-full"
          alt=""
          src={ImageBannerDektop}
        />
        <div className="relative bottom-10 flex flex-col items-center gap-1 p-5 bg-transparent text-white lg:bottom-0 lg:justify-center lg:items-start lg:w-full lg:px-28">
          <h2 className="text-2xl font-bold text-center max-w-[18rem] lg:text-5xl lg:text-left lg:min-w-full">
            Transforme seu Corpo e sua Vida!
          </h2>
          <p className="max-w-[22rem] text-center opacity-60 hover:opacity-90 transition-all lg:text-2xl lg:text-left lg:min-w-full lg:pt-1">
            Alcance Seus Objetivos de Fitness na Nossa Academia Maverick
            Premium!
          </p>
          <a href="#about" className="w-full">
            <button className="bg-[#252525] font-bold py-4 mt-8 w-full rounded-lg hover:opacity-90 transition-all">
              Iniciar
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
