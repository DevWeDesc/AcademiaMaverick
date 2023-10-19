import React from "react";
import { CardPlans } from "./CardPlans";

export const Plans = () => {
  return (
    <div className="flex flex-col px-5 py-8 gap-5 items-center">
      <p className="text-logoColorLight font-semibold">
        Nossos Planos Acessíveis e Flexíveis
      </p>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl text-center font-bold">
          Escolha o Plano Perfeito para Você
        </h2>
        <div className="h-[2px] rounded-full w-16 bg-logoColorLight" />
      </div>
      <CardPlans />
    </div>
  );
};
