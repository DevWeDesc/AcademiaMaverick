"use client";
import React, { useState } from "react";
import { IPartnerShips } from "../../@types/types";
import Image from "next/image";
import { Check } from "lucide-react";

export const CardPartnerShips = ({
  content,
  title,
  image,
  from,
  observation,
}: IPartnerShips) => {
  const [transitionFooter, setTransitionFooter] = useState(false);

  return (
    <div
      onMouseEnter={() => setTransitionFooter(true)}
      onMouseLeave={() => setTransitionFooter(false)}
      className="px-5 py-8 shadow-cardDefault shadow-white  gap-5 rounded-lg flex flex-col items-center hover:shadow-card hover:shadow-white transition-all h-full"
    >
      <Image
        alt={`imagem da parceira ${title}`}
        src={image}
        height={150}
        objectFit="cover"
      />
      <p className="font-bold">{title}</p>
      <div>
        <p className="font-normal text-[11px] mb-3">{content}</p>
        {observation.length > 0 && (
          <p className="text-[11px] font-semibold py-2 text-logoColorLight">
            Observações
          </p>
        )}
        {observation?.map((data, index) => (
          <p
            className="text-[11px] text-logoColorLight flex items-center gap-3"
            key={index}
          >
            <Check size={15} /> {data}
          </p>
        ))}
        <p className="font-semibold text-sm text-center py-4">{from}</p>
        <div
          className={`transition-all h-[1px] m-auto bg-white ${
            transitionFooter ? "w-10/12" : "w-3/12"
          }`}
        />
      </div>
    </div>
  );
};
