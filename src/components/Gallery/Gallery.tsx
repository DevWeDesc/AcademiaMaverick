import React from "react";
import { SwiperGallery } from "./SwiperGallery";

export const Gallery = () => {
  return (
    <div>
      <div className="bg-black text-white flex flex-col px-5 pt-24 lg:pt-[100px] pb-5 gap-5 items-center lg:px-36 lg:pb-0 lg:py-28 max-w-[1700px] m-auto">
        <p className="text-logoColorLight font-semibold md:col-span-2 lg:col-span-4 lg:text-center lg:text-2xl">
          Nosso maior projeto é você!
        </p>
        <div className="flex flex-col items-center gap-2 md:col-span-2 lg:col-span-4 lg:mb-12">
          <h2 className="text-2xl text-center font-bold lg:text-5xl">
            Conheça nosso espaço!
          </h2>
          <div className="h-[2px] rounded-full w-16 bg-logoColorLight lg:w-28 mt-1" />
        </div>
      </div>
      <SwiperGallery />
    </div>
  );
};
