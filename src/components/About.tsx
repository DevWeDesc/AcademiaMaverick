"use client";
import { SwiperAbout } from "./SwiperAbout/SwiperAbout";
import { ChevronRight } from "lucide-react";

export const About = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-11 lg:px-36 lg:pt-40 lg:pb-20 bg-black max-w-[1700px] m-auto">
      <div className="text-white flex flex-col pt-[100px] lg:w-full lg:pt-0 lg:justify-center px-5 bg-transparent">
        <h2 className="font-bold text-2xl lg:text-5xl">Nossa História!</h2>
        <div className="w-[3rem] h-[2px] bg-logoColor mb-5 lg:mt-1 lg:w-20" />
        <p className="text-logoColorLight opacity-100 mb-2 lg:font-medium lg:text-2xl">
          Construindo um Legado de Excelência em Fitness
        </p>
        <p className="opacity-60 text-[12px] hover:opacity-100 transition-all mb-2 lg:text-lg">
          Descubra a nossa jornada de dedicação ao fitness, paixão pela saúde e
          compromisso com a sua transformação física. Conheça a equipe que faz a
          diferença em nossa academia e saiba por que somos a escolha certa para
          atingir seus objetivos de bem-estar
        </p>
        <a
          aria-label="Link para dicionamento a sessão de Planos"
          href="#plans"
          className="text-white flex flex-row gap-2 font-semibold items-center hover:gap-4 transition-all text-[14px] mb-7 lg:py-2 lg:text-xl opacity-90 hover:opacity-100"
        >
          <span>Conheça nossos Planos!</span>
          <ChevronRight />
        </a>
      </div>
      <div className="bg-transparent">
        <SwiperAbout />
      </div>
    </div>
  );
};
