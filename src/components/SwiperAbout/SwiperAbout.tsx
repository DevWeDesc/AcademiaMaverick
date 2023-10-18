"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import ImageSwiper from "../../../public/Image.png";
import Image from "next/image";

export const SwiperAbout = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Image alt="" src={ImageSwiper}></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="" src={ImageSwiper}></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image alt="" src={ImageSwiper}></Image>
      </SwiperSlide>
    </Swiper>
  );
};
