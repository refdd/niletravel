"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import dynamic from "next/dynamic";
const CardOfferTour = dynamic(() => import("../cards/CardOfferTour"));

function ToursSlider({ toursData }) {
  //   console.log(toursData);
  const [offersTours, setOffersTours] = useState([]);
  useEffect(() => {
    const toursOffer = toursData.filter((itme) => itme.discount !== 0);
    setOffersTours(toursOffer);
  }, []);
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
        {offersTours?.map((item) => (
          <SwiperSlide key={item?.id}>
            <CardOfferTour
              imgSrc={item?.image}
              slug={item?.slug}
              metaTitle={item.meta_title}
              duration={item?.duration}
              title={item?.title}
              discount={item.discount}
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
