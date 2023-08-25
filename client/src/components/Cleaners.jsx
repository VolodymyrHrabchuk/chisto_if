import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useRef } from "react";
import { motion } from "framer-motion";
import CleanersData from "./CleanersData";

const Cleaners = () => {
  const swiperCleanPrev = useRef(null);
  const swiperCleanNext = useRef(null);

  return (
    <div className="container">
      <h2 className="heading">Очисники, які ми використовуємо</h2>
      <h4 className="subheading">
        Для ефективного видалення плям, для кожного типу необхідно
        використовувати спеціалізовані очисники
      </h4>
      <motion.div
        className="cleaner-sw"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={4}
          navigation={{
            prevEl: swiperCleanPrev.current,
            nextEl: swiperCleanNext.current,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            dynamicBullets: true,
            dynamicMainBullets: 1,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 2,
            },
            760: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="clean-swiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperCleanPrev.current;
            swiper.params.navigation.nextEl = swiperCleanNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {CleanersData.map((CleanersData, index) => (
            <SwiperSlide key={index}>
              <div className="card-item__item df">
                <img src={CleanersData.img} alt="" className="card-item__img" />
                <div className="card-item__descr">
                  <h4 className="card-item__type">{CleanersData.type}</h4>
                  <p className="card-item__brand">{CleanersData.brand}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiperCleanPrev" ref={swiperCleanPrev}></div>
        <div className="swiperCleanNext" ref={swiperCleanNext}></div>
      </motion.div>
    </div>
  );
};

export default Cleaners;
