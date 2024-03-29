import React from "react";
import { GridActivies } from "./GridActivies";
import { SwiperActivies } from "../SwiperActivies/SwiperActivies";

export const Activities = () => {
  return (
    <div className="flex px-5 lg:text-center flex-col items-center gap-12 pt-16 lg:py-20 lg:px-36 bg-black max-w-[1700px] m-auto 4xl:px-0">
      <div className="space-y-1">
        <div className="py-9 space-y-1">
          <h2 className="font-bold text-2xl lg:text-5xl">Nossas Atividades</h2>
          <div className="w-[3rem] h-[2px] bg-logoColor mb-5 lg:mt-1 lg:w-20 lg:mx-auto" />
        </div>
        <div className="space-y-4">
          <p className="text-logoColorLight opacity-100 mb-2 lg:font-medium lg:text-2xl">
            Variadas Aulas para Todos os Ritmos e Desafios: FitDance,
            CrossTraining e Muito Mais!
          </p>
          <p className="opacity-60 text-[12px] hover:opacity-100 transition-all mb-2 lg:text-lg">
            Explore uma experiência única na nossa academia, onde cada movimento
            é um passo em direção ao seu bem-estar. Com aulas dinâmicas e
            instrutores dedicados, oferecemos um ambiente motivador para
            alcançar seus objetivos fitness. Seja desafiando-se em treinos
            intensos ou relaxando em sessões de ioga revigorantes, aqui você
            encontra a harmonia entre saúde e diversão. Descubra uma jornada
            transformadora em nossa academia, onde cada esforço é um
            investimento no seu melhor eu.
          </p>
        </div>
      </div>
      <SwiperActivies />
      {/* <GridActivies /> */}
    </div>
  );
};
