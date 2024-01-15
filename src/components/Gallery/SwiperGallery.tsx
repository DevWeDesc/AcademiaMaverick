"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { imagesGallery } from "../../../data/data";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SwiperGallery = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    if (window) {
      window.innerWidth <= 620 ? setSlidesPerView(2) : setSlidesPerView(4);
    }
  }, []);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[FreeMode, Navigation]}
      className="gallerySwiper"
    >
      {imagesGallery.map((item, index) => (
        <SwiperSlide key={index} className="cursor-grab active:cursor-grabbing">
          <Image alt="" src={item.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
