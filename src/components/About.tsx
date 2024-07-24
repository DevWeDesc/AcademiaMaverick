"use client";
import { SwiperAbout } from "./SwiperAbout/SwiperAbout";
import { ChevronRight } from "lucide-react";

export const About = () => {
  return (
    <div className="font-sans lg:grid lg:grid-cols-2 lg:gap-11 lg:px-36 lg:pt-40 lg:pb-20 bg-black max-w-[1700px] m-auto items-center">
      <div className="text-white flex flex-col pt-[100px] lg:w-full lg:pt-0 lg:justify-center px-5 bg-transparent">
        <h2 className="font-bold text-2xl lg:text-4xl">
          Uma academia de luxo no seu bairro!
        </h2>
        <div className="w-[3rem] h-[2px] bg-logoColor mb-5 mt-1 lg:w-20" />
        <p className="text-logoColorLight opacity-100 mb-2 lg:font-medium lg:text-xl">
          Bem-vindo à Maverick Academia 24h!
        </p>
        <p className="opacity-60 text-[12px] hover:opacity-100 transition-all mb-2 lg:text-base">
          O lugar perfeito para alcançar seus objetivos de fitness a qualquer
          hora do dia! Nossa academia está equipada com vestiários confortáveis,
          duchas, armários seguros e uma ampla gama de equipamentos de
          musculação de primeira linha. Varias aulas por mês, garantindo
          dinamismo em sua rotina de exercícios. Para um treino mais eficaz,
          contamos com a montagem de treinos personalizados e um aplicativo
          exclusivo que facilita o acompanhamento do seu progresso. Além disso,
          nossos professores estão sempre disponíveis para orientar e motivar
          você em cada etapa da sua jornada fitness.
        </p>
        <a
          aria-label="Link para dicionamento a sessão de Planos"
          href="#plans"
          className="text-white flex flex-row gap-2 font-semibold items-center hover:gap-4 transition-all text-[14px] mb-7 lg:py-2 lg:text-lg opacity-90 hover:opacity-100"
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
