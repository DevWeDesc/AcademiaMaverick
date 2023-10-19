import React from "react";
import { SwiperAbout } from "./SwiperAbout/SwiperAbout";

export const About = () => {
  return (
    <>
      <div className="flex flex-col pt-[100px] px-5">
        <h2 className="font-bold text-2xl">Nossa História!</h2>
        <div className="w-[3rem] h-[2px] bg-logoColor mb-5" />
        <p className="text-logoColorLight opacity-100 mb-2">
          Construindo um Legado de Excelência em Fitness
        </p>
        <p className="opacity-60 text-[12px] hover:opacity-100 transition-all mb-7">
          Descubra a nossa jornada de dedicação ao fitness, paixão pela saúde e
          compromisso com a sua transformação física. Conheça a equipe que faz a
          diferença em nossa academia e saiba por que somos a escolha certa para
          atingir seus objetivos de bem-estar
        </p>
      </div>
      <SwiperAbout />
    </>
  );
};
