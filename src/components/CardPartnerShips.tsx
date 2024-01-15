"use client";
import React, { useState } from "react";
import { IPartnerShips } from "../../@types/types";
import Image from "next/image";

export const CardPartnerShips = ({
  content,
  title,
  image,
  from,
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
