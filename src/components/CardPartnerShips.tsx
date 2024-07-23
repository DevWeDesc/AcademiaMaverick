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
      className="px-5 pt-8 pb-24 relative shadow-cardDefault shadow-white  gap-5 rounded-lg flex flex-col items-center hover:shadow-card hover:shadow-white transition-all h-full"
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
          <p className="font-semibold text-sm text-center py-4">{from}</p>
          <div
            className={`transition-all h-[1px] m-auto bg-white ${
              transitionFooter ? "w-10/12" : "w-3/12"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
