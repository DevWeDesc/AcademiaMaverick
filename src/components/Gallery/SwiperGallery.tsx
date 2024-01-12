"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { imagesGallery } from "../../../data/data";
import Image from "next/image";

export const SwiperGallery = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[FreeMode, Pagination, Navigation]}
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
