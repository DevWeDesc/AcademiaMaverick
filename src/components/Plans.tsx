import React from "react";
import { CardPlans } from "./CardPlans";
import { DataPlans } from "../../data/data";

export const Plans = () => {
  return (
    <div className="bg-black text-white flex flex-col px-5 pt-[100px] pb-20 gap-5 items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 lg:px-36 lg:py-28">
      <p className="text-logoColorLight font-semibold md:col-span-2 lg:col-span-4 lg:text-center lg:text-2xl">
        Nossos Planos Acessíveis e Flexíveis
      </p>
      <div className="flex flex-col items-center mb-3 gap-2 md:col-span-2 lg:col-span-4 ">
        <h2 className="text-2xl text-center font-bold lg:text-5xl">
          Escolha o Plano Perfeito para Você
        </h2>
        <div className="h-[2px] rounded-full w-16 bg-logoColorLight lg:w-28 lg:mt-2" />
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
