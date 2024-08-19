"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import Image from "next/image";
import { imagePilates } from "../../../data/data";

export const SwiperPilates = () => {
  return (
    <Swiper
      slidesPerView={2}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={40}
    >
      {imagePilates.map((item, index) => (
        <SwiperSlide key={index} className="cursor-grab active:cursor-grabbing">
          <Image alt="" src={item.imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
