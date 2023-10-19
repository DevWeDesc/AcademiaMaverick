import React from "react";
import { CardPlans } from "./CardPlans";
import { DataPlans } from "../../data/data";

export const Plans = () => {
  return (
    <div className="flex flex-col px-5 pt-20 gap-5 items-center">
      <p className="text-logoColorLight font-semibold">
        Nossos Planos Acessíveis e Flexíveis
      </p>
      <div className="flex flex-col items-center mb-3 gap-2">
        <h2 className="text-2xl text-center font-bold">
          Escolha o Plano Perfeito para Você
        </h2>
        <div className="h-[2px] rounded-full w-16 bg-logoColorLight" />
      </div>
      {DataPlans.map((data) => (
        <CardPlans
          key={data.id}
          title={data.title}
          price={data.price}
          benefits={data.benefits}
        />
      ))}
    </div>
  );
};
