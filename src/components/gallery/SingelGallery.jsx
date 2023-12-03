"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import GalleryImage from "./GalleryImage";
function SingelGallery({ gallery }) {
  return (
    <div className="pt-10">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="singileGallery "
      >
        {gallery?.map((item) => (
          <SwiperSlide key={item.id}>
            <GalleryImage imgSrc={item.image} metaTitle={item.meta_title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SingelGallery;
