import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import ServiceItem from "./ServiceItem";
import ServiceData from "./ServiceData";
import { Navigation, Pagination } from "swiper/modules";

const Service = () => {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="container">
      <h2 className="heading ">Сервіси</h2>
      <div className="services full">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiperHomePrev",
            nextEl: ".swiperHomeNext",
          }}
          breakpoints={{
            1400: {
              slidesPerView: 3,
              navigation: true,
            },
            950: {
              slidesPerView: 3,
              navigation: false,
            },
            750: {
              slidesPerView: 2,
              navigation: false,
              pagination: false,
            },
            320: {
              slidesPerView: 1,
              // navigation: true,
              pagination: false,
            },
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            dynamicBullets: true,
            dynamicMainBullets: 1,
          }}
          className="home-swiper"
          modules={[Navigation, Pagination]}
        >
          {ServiceData.map((service, index) => {
            return (
              <SwiperSlide key={index}>
                <ServiceItem
                  imgSrc={service.imgSrc}
                  heading={service.heading}
                  description={service.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiperHomePrev" onClick={goPrev}></div>
        <div className="swiperHomeNext" onClick={goNext}></div>
      </div>
    </div>
  );
};

export default Service;
