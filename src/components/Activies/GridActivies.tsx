import Image from "next/image";
import React from "react";
import ImageJumpping from "../../../public/jumpping.jpg";

export const GridActivies = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 h-[556px] gap-6 text-left">
      <div className="relative col-span-2 w-full">
        <Image
          className="h-full absolute object-cover opacity-20 rounded-lg   bg-[rgb(0,0,0,0.2)]"
          src={ImageJumpping}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="absolute top-7 left-5 text-white space-y-4">
          <p className="">Cross Fight</p>
          <p className="font-extralight text-sm opacity-90 flex flex-col gap-1">
            <strong>Horário de Atividade</strong>
            <span>Seg das 07:00hrs ás 08:00hrs</span>
            <span>Ter e Qui das 20:00hrs ás 21:00hrs</span>
            <span>Sex das 06:00hrs ás 07:00hrs</span>
          </p>
        </div>
      </div>
      <div className="relative w-full ">
        <Image
          className="h-full absolute object-cover  opacity-20 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageJumpping}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="absolute top-7 left-5 text-white space-y-2">
          <p className="">Pilates</p>
          <p className="font-extralight opacity-90">
            Horário de Atividade: <br />
            Seg: 06:00hrs ás 7:00hrs{" "}
          </p>
        </div>
      </div>{" "}
      <div className="relative w-full">
        <Image
          className="h-full object-cover opacity-20 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageJumpping}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="absolute top-7 left-5 text-white space-y-2">
          <p className="">Step</p>
          <p className="font-extralight text-sm opacity-90 flex flex-col gap-1">
            <strong>Horário de Atividade</strong>
            <span>Seg das 18:00hrs ás 19:00hrs</span>
            <span>Qui das 08:00hrs ás 09:00hrs</span>
          </p>
        </div>
      </div>
      <div className="relative w-full ">
        <Image
          className="h-full absolute object-cover  opacity-20 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageJumpping}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="absolute top-7 left-5 text-white space-y-2">
          <p className="">Abdominal + Alongamento</p>
          <p className="font-extralight text-sm opacity-90 flex flex-col gap-1">
            <strong>Horário de Atividade</strong>
            <span>Seg das 20:00hrs ás 21:00hrs</span>
            <span>Ter das 08:00hrs ás 09:00hrs</span>
            <span>Qua das 06:00hrs ás 07:00hrs</span>
          </p>
        </div>
      </div>{" "}
      <div className="relative w-full ">
        <Image
          className="h-full absolute object-cover  opacity-20 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageJumpping}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="absolute top-7 left-5 text-white space-y-2">
          <p className="">Cross Kids</p>
          <p className="font-extralight text-sm opacity-90 flex flex-col gap-1">
            <strong>Horário de Atividade</strong>
            <span>Ter e Quinta das 18:00hrs ás 19:00hrs</span>
          </p>
        </div>
      </div>
      <div className="relative col-span-2 w-full ">
        <Image
          className="h-full absolute object-cover  opacity-20 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageJumpping}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="absolute top-7 left-5 text-white space-y-2">
          <p className="">FitDance</p>
          <p className="font-extralight text-sm opacity-90 flex flex-col gap-1">
            <strong>Horário de Atividade</strong>
            <span>Seg das 08:00hrs ás 09:00hrs e das 19:00hrs ás 20:00hrs</span>
            <span>Quarta e Sex das 08:00hrs ás 09:00hrs</span>
            <span>Sex das 19:00hrs ás 20:00hrs</span>
          </p>
        </div>
      </div>
    </div>
  );
};
