"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import ImageSwiper from "../../../public/Image.png";
import Image from "next/image";
import ImagePeople from "../../../public/Ellipse 2.png";
import stars from "../../../public/Frame 13.png";
import { ISwiperFeedbacks } from "../../../types/types";

export const SwiperFeedbacks = () => {
  let windowPage = 0;
  if (typeof window !== "undefined") {
    windowPage = window.innerWidth;
  }

  return (
    <Swiper
      slidesPerView={windowPage >= 1040 ? 2 : 1}
      spaceBetween={windowPage >= 1040 ? 30 : 0}
      navigation={true}
      modules={[Navigation]}
      className={`mySwiperFeedback`}
    >
      <SwiperSlide>
        <div className="w-full flex cursor-move mt-10 flex-col gap-4 p-4 lg:px-5 lg:py-14 rounded-xl bg-[#181818]">
          <div className="flex gap-6 m-0 items-center">
            <Image
              className="max-w-[56px] max-h-[56px] lg:max-w-[64px] lg:max-h-[64px]"
              alt=""
              src={ImagePeople}
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold lg:text-xl">Vinicius Henrique</p>
              <Image alt="" src={stars} className="w-[86px]"></Image>
            </div>
          </div>
          <p className="text-left text-[12px] font-medium lg:text-lg">
            Esta academia é simplesmente incrível! Desde o momento em que
            entrei, fui recebido com uma equipe calorosa e amigável, além de
            instrutores experientes e motivadores.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex cursor-move mt-10 flex-col gap-4 p-4 lg:px-5 lg:py-14 rounded-xl bg-[#181818]">
          <div className="flex gap-6 m-0 items-center">
            <Image
              className="max-w-[56px] max-h-[56px] lg:max-w-[64px] lg:max-h-[64px]"
              alt=""
              src={ImagePeople}
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold lg:text-xl">Vinicius Henrique</p>
              <Image alt="" src={stars} className="w-[86px]"></Image>
            </div>
          </div>
          <p className="text-left text-[12px] font-medium lg:text-lg">
            Esta academia é simplesmente incrível! Desde o momento em que
            entrei, fui recebido com uma equipe calorosa e amigável, além de
            instrutores experientes e motivadores.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex cursor-move mt-10 flex-col gap-4 p-4 lg:px-5 lg:py-14 rounded-xl bg-[#181818]">
          <div className="flex gap-6 m-0 items-center">
            <Image
              className="max-w-[56px] max-h-[56px] lg:max-w-[64px] lg:max-h-[64px]"
              alt=""
              src={ImagePeople}
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold lg:text-xl">Vinicius Henrique</p>
              <Image alt="" src={stars} className="w-[86px]"></Image>
            </div>
          </div>
          <p className="text-left text-[12px] font-medium lg:text-lg">
            Esta academia é simplesmente incrível! Desde o momento em que
            entrei, fui recebido com uma equipe calorosa e amigável, além de
            instrutores experientes e motivadores.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
