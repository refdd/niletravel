"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardPartner from "../cards/CardPartner";
function PartnersSlider({ data }) {
  return (
    <div className="mt-8">
      <div className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={32}
          className="reviewSlider !pb-8"
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item?.id}>
              <CardPartner imgSrc={item.icon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PartnersSlider;
