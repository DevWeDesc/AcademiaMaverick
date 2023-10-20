import React from "react";
import { SwiperFeedbacks } from "./SwiperFeedbacks/Swiper";

export const Feedbacks = () => {
  return (
    <div className="pt-12 pb-5 bg-gradient-to-r from-black to-zinc-800">
      <div className="pt-12 pb-7 flex flex-col gap-7 items-center px-5 lg:px-44">
        <h2 className="text-2xl font-bold text-center lg:text-5xl lg:max-w-[793px]">
          Nossas Avaliações dos Nossos Clientes!
        </h2>
        <div className="flex flex-col gap-2 lg:max-w-[793px]">
          <p className="text-center font-semibold text-logoColorLight lg:text-2xl">
            O Que Nossos Membros Têm a Dizer
          </p>
          <p className="text-center text-[12px] font-medium px-5 opacity-70 transition-all hover:opacity-100 lg:text-xl">
            Nossos membros compartilham suas experiências inspiradoras e
            resultados surpreendentes. Descubra como a nossa academia tem feito
            a diferença na vida deles, proporcionando transformações físicas e
            bem-estar em uma comunidade dedicada ao fitness.
          </p>
        </div>
        <SwiperFeedbacks />
      </div>
    </div>
  );
};
