import Image from "next/image";
import React from "react";
import ImageJumpping from "../../../public/jumpping.jpg";
import ImageAbs from "../../../public/abdominal.jpg";
import ImageStep from "../../../public/Step.jpg";
import ImagePilates from "../../../public/pilates.png";
import ImageCrossKids from "../../../public/crosskids.jpg";
import ImageFitDance from "../../../public/fitdance.jpg";
import ImageCrossTraining from "../../../public/crosstraining.png";
import ImageGap from "../../../public/gap.jpeg";
import ImageHiit from "../../../public/hiit.jpg";

export const GridActivies = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 h-auto gap-6 text-left">
      <div className="relative col-span-2 w-full">
        <Image
          className="h-full absolute object-cover opacity-20 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageJumpping}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="text-white space-y-4 py-8 px-5">
          <p className="">Cross Fight - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Segunda-feira:</strong>
              <br />
              <span>- 07:00hrs às 08:00hrs</span>
            </p>
            <p>
              <strong>Terça-feira e Quinta-feira:</strong> <br />
              <span> - 20:00hrs às 21:00hrs</span>
            </p>
            <p>
              <strong>Sexta-feira:</strong> <br />
              <span> - 06:00hrs às 07:00hrs</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <Image
          className="h-full absolute object-cover  opacity-30 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageAbs}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className=" text-white space-y-4 py-8 px-5">
          <p className="">Abdominal + Alongamento - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Segunda-feira:</strong>
              <br />
              <span>- 20:00hrs às 21:00hrs</span>
            </p>
            <p>
              <strong>Terça-feira:</strong>
              <br />
              <span>- 08:00hrs às 09:00hrs</span>
            </p>
            <p>
              <strong>Quarta-feira:</strong>
              <br />
              <span>- 06:00hrs às 07:00hrs</span>
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="relative w-full">
        <Image
          className="h-full absolute object-cover opacity-30 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageStep}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="text-white space-y-4 py-8 px-5">
          <p className="">Step - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Segunda-feira:</strong>
              <br />
              <span>- 18:00hrs às 19:00hrs</span>
            </p>
            <p>
              <strong>Quinta-feira:</strong>
              <br />
              <span>- 08:00hrs às 09:00hrs</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <Image
          className="h-full absolute object-cover opacity-30 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImagePilates}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="text-white space-y-4 py-8 px-5">
          <p className="">Pilates - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Segunda-feira:</strong>
              <br />
              <span>- 06:00hrs às 07:00hrs</span>
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="relative w-full ">
        <Image
          className="h-full absolute object-cover  opacity-30 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageCrossKids}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="text-white space-y-4 py-8 px-5">
          <p className="">Cross Kids - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Terça-feira e Quinta-feira:</strong>
              <br />
              <span>- 18:00hrs às 19:00hrs</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative col-span-2 w-full ">
        <Image
          className="h-full absolute object-cover  opacity-20 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageFitDance}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="text-white space-y-4 py-8 px-5">
          <p className="">FitDance - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Segunda-feira:</strong>
              <br />
              <span>- 08:00hrs às 09:00hrs</span>
              <br />
              <span>- 19:00hrs às 20:00hrs</span>
            </p>
            <p>
              <strong>Quarta-feira:</strong>
              <br />
              <span>- 08:00hrs às 09:00hrs</span>
            </p>
            <p>
              <strong>Sexta-feira:</strong>
              <br />
              <span>- 08:00hrs às 09:00hrs</span>
              <br />
              <span>- 19:00hrs às 20:00hrs</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative col-span-2 w-full">
        <Image
          className="h-full absolute object-cover opacity-30 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageCrossTraining}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        {/* 4 Gap, Hit 2, crosstrauining6  */}
        <div className="text-white space-y-4 py-8 px-5">
          <p className="">Cross Training - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Terça-feira:</strong>
              <br />
              <span>- 19:00hrs às 20:00hrs</span>
            </p>
            <p>
              <strong>Quarta-feira:</strong> <br />
              <span> - 07:00hrs às 08:00hrs</span>
              <br />
              <span> - 19:00hrs às 19:00hrs</span>
            </p>
            <p>
              <strong>Quinta-feira:</strong> <br />
              <span> - 20:00hrs às 21:00hrs</span>
            </p>
            <p>
              <strong>Sexta-feira:</strong> <br />
              <span> - 07:00hrs às 08:00hrs</span>
              <br />
              <span> - 20:00hrs às 21:00hrs</span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <Image
          className="h-full absolute object-cover  opacity-30 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageGap}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="text-white space-y-4 py-8 px-5">
          <p className="">Gap - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Terça-feira e Quinta-feira:</strong>
              <br />
              <span>- 06:00hrs às 07:00hrs</span>
            </p>
            <p>
              <strong>Quarta-feira:</strong>
              <br />
              <span>- 20:00hrs às 21:00hrs</span>
            </p>
            <p>
              <strong>Sexta-feira:</strong>
              <br />
              <span>- 18:00hrs às 19:00hrs</span>
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="relative w-full">
        <Image
          className="h-full absolute object-cover opacity-30 rounded-lg bg-[rgb(0,0,0,0.2)]"
          src={ImageHiit}
          alt="Imagem de pulo"
          objectPosition="center"
        />
        <div className="text-white space-y-4 py-8 px-5">
          <p className="">Hiit - Horário de Atividade</p>
          <div className="font-extralight text-sm opacity-90 flex flex-col gap-3">
            <p>
              <strong>Terça-feira e Quinta-feira:</strong>
              <br />
              <span>- 07:00hrs às 08:00hrs</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
