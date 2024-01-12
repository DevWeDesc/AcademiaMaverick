"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import Image from "next/image";
import stars from "../../../public/Frame 13.png";
import { ISwiperFeedbacks } from "../../../@types/types";
import { comentsData } from "../../../data/data";
import { User2 } from "lucide-react";

export const SwiperFeedbacks = ({ slidesPerView }: ISwiperFeedbacks) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={slidesPerView === 2 ? 30 : 0}
      navigation={true}
      modules={[Navigation]}
      className={`mySwiperFeedback`}
    >
      {comentsData.map((data, index) => (
        <SwiperSlide key={index} className="cursor-grab active:cursor-grabbing">
          <div className="w-full min-h-full flex cursor-grab active:cursor-grabbing mt-10 lg:mt-16 flex-col gap-4 p-4 lg:px-5 lg:py-14 rounded-xl bg-[#181818]">
            <div className="flex gap-6 m-0 items-center">
              {data.photo ? (
                <Image
                  className="max-w-[56px] max-h-[56px] lg:max-w-[64px] rounded-full lg:max-h-[64px]"
                  alt={`Imagem do Usuário ${data.name}`}
                  src={data.photo}
                />
              ) : (
                <User2
                  strokeWidth={1}
                  className="w-[50px] h-[50px] lg:w-[50px] rounded-full lg:h-[50px] bg-zinc-600 p-2"
                />
              )}
              <div className="flex flex-col gap-1">
                <p className="font-bold lg:text-xl">{data.name}</p>
                <Image
                  alt="Quantidade de estrelas do feedback"
                  src={stars}
                  className="w-[86px]"
                />
              </div>
            </div>
            <p className="text-left text-[12px] font-medium lg:text-lg">
              {data.content}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
