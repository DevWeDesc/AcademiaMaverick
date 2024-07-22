"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImageBannerMobile from "../../public/ImageBannerMobile.png";
import ImageBannerDektop from "../../public/ImageBannerDektop.png";
import { ChevronRight } from "lucide-react";
import image00088 from "../../public/imagesMaverick/image00088.jpeg";

export const Banner = () => {
  const [transitionButton, setTransitionButton] = useState(false);
  return (
    <div className="flex items-center justify-center min-h-[616px] lg:pt-[117px] max-w-[1700px] m-auto">
      <div className="pt-[80px] w-screen lg:w-[98vw] h-auto lg:grid lg:grid-cols-2 bg-black ">
        <div className="lg:min-h-[463px] relative">
          <Image
            className="w-full lg:hidden mb-16"
            alt="Imagem do banner"
            src={image00088}
          />
          <Image
            className="hidden object-cover lg:absolute lg:block h-full w-auto"
            alt="Imagem do banner"
            src={image00088}
          />
        </div>
        <div className="relative bottom-10 flex flex-col items-center gap-1 p-5 bg-transparent text-white lg:bottom-0 lg:justify-center lg:h-full lg:items-center lg:w-full lg:px-28">
          <h2 className="text-2xl font-bold text-center max-w-[18rem] lg:text-5xl lg:text-left lg:min-w-full">
            QUE TAL SE SENTIR ESPECIAL?!
          </h2>
          <p className="max-w-[22rem] text-center opacity-60 hover:opacity-90 transition-all lg:text-2xl lg:text-left lg:min-w-full lg:pt-1">
            Conheça a Maverick e descubra um novo padrão de qualidade em saúde e
            bem-estar. Estamos prontos para receber você a qualquer momento!
          </p>
          <a
            aria-label="Link para dicionamento a sessão de Nossa História"
            href="#about"
            className="w-full"
          >
            <button
              onMouseEnter={() => setTransitionButton(true)}
              onMouseLeave={() => setTransitionButton(false)}
              className="flex flex-row gap-2 font-semibold items-center justify-center hover:gap-4 transition-all py-6 mt-8 w-full rounded-lg hover:opacity-90"
            >
              <span className="text-sm lg:text-lg">
                {" "}
                Quero Saber mais sobre a Academia Maverick
              </span>
              <ChevronRight />
            </button>
            <div
              className={`h border border-logoColor m-auto transition-all ${
                !transitionButton ? "w-10" : "w-full lg:w-[90%]"
              }`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
