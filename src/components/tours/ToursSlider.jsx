"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import dynamic from "next/dynamic";
const CardTour = dynamic(() => import("../cards/CardTour"));
function ToursSlider({ toursData, slugType }) {
  //   console.log(toursData);
  return (
    <div className="mt-5">
      {" "}
      <Swiper
        autoplay={{
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper !pb-10"
      >
        {toursData?.map((item) => (
          <SwiperSlide key={item?.id}>
            <CardTour
              imgSrc={item?.image}
              slug={item?.slug}
              slugType={slugType}
              metaTitle={item.meta_title}
              duration={item?.duration}
              title={item?.title}
              price={item?.start_price}
              description={item?.overview?.substring(0, 120)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ToursSlider;
