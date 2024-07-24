import React from "react";
import { SwiperActivies } from "../SwiperActivies/SwiperActivies";

export const Activities = () => {
  return (
    <div className="text-white font-sans flex px-5 lg:text-center flex-col items-center gap-12 pt-16 lg:py-20 lg:px-36 bg-black max-w-[1700px] m-auto 4xl:px-0">
      <div className="space-y-1">
        <div className="py-9 space-y-1">
          <h2 className="font-bold text-2xl lg:text-5xl">
            Transforme Seu Treino com Nossas Aulas Coletivas
          </h2>
          <div className="w-[3rem] h-[2px] bg-logoColor mb-5 lg:mt-1 lg:w-20 lg:mx-auto" />
        </div>
        <div className="space-y-4">
          <p className="text-logoColorLight opacity-100 mb-2 lg:font-medium lg:text-2xl">
            Descubra a diversão e motivação em cada sessão, com opções para
            todos os perfis e idades.
          </p>
          <p className="opacity-60 text-[12px] hover:opacity-100 transition-all mb-2 lg:text-lg">
            Nossas aulas coletivas são projetadas para oferecer uma experiência
            dinâmica e envolvente para todos os nossos alunos. Com opções que
            incluem aulas de dança, funcionais, pilates e programas especiais
            para crianças, temos algo para cada perfil e objetivo. Cada sessão é
            conduzida por instrutores qualificados que garantem um ambiente
            seguro e motivador. As aulas coletivas não só proporcionam um
            excelente treino, mas também incentivam a interação social e a
            diversão, tornando sua rotina de exercícios mais prazerosa e eficaz.
          </p>
        </div>
      </div>
      <SwiperActivies />
      {/* <GridActivies /> */}
    </div>
  );
};
