import React from "react";
import { DataPlans, dataPartnerShips } from "../../data/data";
import { CardPlans } from "./CardPlans";
import { CardPartnerShips } from "./CardPartnerShips";

export const Partnerships = () => {
  return (
    <div className="font-sans bg-black text-white flex flex-col px-5 pt-[100px] pb-20 gap-5 items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:px-36 lg:py-28 max-w-[1700px] m-auto">
      <p className="text-logoColorLight font-semibold md:col-span-2 lg:col-span-4 lg:text-center lg:text-2xl">
        Conecte-se com empresas e profissionais que compartilham sua missão de
        promover a saúde e o bem-estar
      </p>
      <div className="flex flex-col items-center gap-2 md:col-span-2 lg:col-span-4 mb-12">
        <h2 className="text-2xl text-center font-bold lg:text-5xl">
          Parcerias para o bem-estar
        </h2>
        <div className="h-[2px] rounded-full w-16 bg-logoColorLight lg:w-28 mt-1" />
      </div>
      {dataPartnerShips.map((data, index) => (
        <CardPartnerShips
          observation={data.observation}
          from={data.from}
          image={data.image}
          key={index}
          content={data.content}
          title={data.title}
        />
      ))}
    </div>
  );
};
