"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { ActiviesData, imagesAbout } from "../../../data/data";
import { CardActivies } from "../CardActivies";

export const SwiperActivies = () => {
  const [weekday, setWeekday] = useState("");
  return (
    <>
      <Swiper
        // slidesPerView={6}
        navigation={true}
        modules={[Navigation]}
        className="flex flex-col swiperActivies relative"
      >
        {ActiviesData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="cursor-grab active:cursor-grabbing"
          >
            <div className="flex flex-col w-full h-full gap-5 p-4 lg:px-12">
              <p className="text-white text-2xl font-semibold">
                {item.dayWeek}
              </p>
              <div
                key={index}
                className={`grid w-full h-full grid-cols-3 grid-rows-2 xl:grid-cols-6 gap-4 content-center justify-center`}
              >
                {item?.activies?.map((data, index) => (
                  <CardActivies key={index} hour={data.hour} name={data.name} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
