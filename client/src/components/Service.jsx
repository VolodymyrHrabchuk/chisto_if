import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useRef, useState } from "react";
import ServiceItem from "./ServiceItem";
import ServiceData from "./ServiceData";

const Service = () => {
  const swiperHomePrev = useRef(null);
  const swiperHomeNext = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="container">
      <h2 className="heading mobile">Сервіси</h2>
      <div className="services full">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            502: {
              slidesPerView: 1,
              navigation: false,
            }
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: swiperHomePrev.current,
            nextEl: swiperHomeNext.current,
          }}
          modules={[Pagination, Navigation]}
          className="home-swiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperHomePrev.current;
            swiper.params.navigation.nextEl = swiperHomeNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          onSlideChange={handleSlideChange}
        >
          {ServiceData.map((service, index) => {
            const isActive = index >= currentSlide && index <= currentSlide + 2;
            return (
              <SwiperSlide key={index}>
                <ServiceItem
                  imgSrc={service.imgSrc}
                  heading={service.heading}
                  description={service.description}
                  isActive={isActive}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="swiperTechPrev" ref={swiperHomePrev}></div>
        <div className="swiperTechNext" ref={swiperHomeNext}></div>
      </div>
    </div>
  );
};

export default Service;
