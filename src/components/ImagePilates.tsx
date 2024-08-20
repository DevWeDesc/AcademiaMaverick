import React from "react";
import { SwiperPilates } from "./SwiperPilates/SwiperPilates";

export const ImagePilates = () => {
  return (
    <div className="font-sans bg-black text-white flex flex-col px-5 pt-[100px] pb-20 gap-5 items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 lg:px-36 lg:py-28 max-w-[1700px] m-auto">
      <div className="flex flex-col items-center gap-2 md:col-span-2 lg:col-span-4 mb-12">
        <h2 className="text-2xl text-center font-bold lg:text-5xl">
          Aqui estão as fotos reais de nossas aulas coletivas!
        </h2>
        <div className="h-[2px] rounded-full w-16 bg-logoColorLight lg:w-28 mt-1" />
      </div>
      <div className="md:col-span-2 lg:col-span-4 w-[90%] m-auto">
        <SwiperPilates />
      </div>
    </div>
  );
};
