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
  const [slidesPerView, setSlidesPerView] = useState(2);
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSlidesPerView(2);
    } else if (window.innerWidth >= 658) {
      setSlidesPerView(2);
    } else if (window.innerWidth >= 558) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(1);
    }
  }, []);
  return (
    <Swiper
      slidesPerView={slidesPerView}
      navigation={true}
      modules={[Navigation]}
      style={{ padding: 40 }}
      className="mySwiper"
      spaceBetween={60}
    >
      {imagePilates.map((item, index) => (
        <SwiperSlide
          key={index}
          className="cursor-grab active:cursor-grabbing border border-logoColor hover:shadow-card hover:shadow-logoColorLight"
        >
          <Image alt="" src={item.imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
