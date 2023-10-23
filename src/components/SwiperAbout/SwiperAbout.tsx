"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import ImageSwiper from "../../../public/Image.png";
import ImageMaverick from "../../../public/MaverickImage.jpg";
import Image from "next/image";

export const SwiperAbout = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper rounded-xl"
    >
      <SwiperSlide className="cursor-grab active:cursor-grabbing">
        <Image alt="" src={ImageSwiper} />
      </SwiperSlide>
      <SwiperSlide className="cursor-grab max-h-[208px] rounded-xl active:cursor-grabbing">
        <Image
          alt=""
          className="rounded-sm object-contain"
          src={ImageMaverick}
        />
      </SwiperSlide>
    </Swiper>
  );
};
