"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import dynamic from "next/dynamic";
const CardInstagram = dynamic(() => import("../cards/CardInstagram"));
import instgramImage1 from "../../../public/assets/images/Nile Cruises  7.webp";
import instgramImage2 from "../../../public/assets/images/Nile Cruises 6.webp";
import instgramImage3 from "../../../public/assets/images/Nile Cruises 5.webp";
import instgramImage4 from "../../../public/assets/images/Nile Cruises 4.webp";
import instgramImage5 from "../../../public/assets/images/Nile Cruises 3.webp";
import instgramImage6 from "../../../public/assets/images/Nile Cruises 2.webp";
import instgramImage7 from "../../../public/assets/images/Nile Cruises 1 .webp";
import instgramImage8 from "../../../public/assets/images/Nile Cruises 8.webp";
function ToursSlider() {
  return (
    <div className=" container mx-0 px-4 mt-5">
      {" "}
      <Swiper
        autoplay={{
          disableOnInteraction: false,
        }}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper !pb-10"
      >
        <SwiperSlide>
          <CardInstagram imgSrc={instgramImage1} />
        </SwiperSlide>
        <SwiperSlide>
          <CardInstagram imgSrc={instgramImage2} />
        </SwiperSlide>
        <SwiperSlide>
          <CardInstagram imgSrc={instgramImage3} />
        </SwiperSlide>
        <SwiperSlide>
          <CardInstagram imgSrc={instgramImage4} />
        </SwiperSlide>
        <SwiperSlide>
          <CardInstagram imgSrc={instgramImage5} />
        </SwiperSlide>
        <SwiperSlide>
          <CardInstagram imgSrc={instgramImage6} />
        </SwiperSlide>
        <SwiperSlide>
          <CardInstagram imgSrc={instgramImage7} />
        </SwiperSlide>
        <SwiperSlide>
          <CardInstagram imgSrc={instgramImage8} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ToursSlider;
