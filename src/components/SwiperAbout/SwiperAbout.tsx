"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import ImageSwiper from "../../../public/Image.png";
import ImageMaverick from "../../../public/MaverickImage.jpg";
import Image from "next/image";
import { imagesAbout } from "../../../data/data";

export const SwiperAbout = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {imagesAbout.map((item, index) => (
        <SwiperSlide key={index} className="cursor-grab active:cursor-grabbing">
          <Image alt="" src={item.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
