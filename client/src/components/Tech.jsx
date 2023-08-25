import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import vacuum1 from "../assets/img/vacuum-1.png";
import vacuum2 from "../assets/img/vacuum-2.png";
import vacuum3 from "../assets/img/vacuum-3.png";
import vacuum4 from "../assets/img/vacuum-4.png";
import { useRef } from "react";
import { motion } from "framer-motion";

const Tech = () => {
  const swiperTechPrev = useRef(null);
  const swiperTechNext = useRef(null);

  return (
    <div className="container">
      <h2 className="heading">Техніка, якою працюємо</h2>
      <h4 className="subheading">
        Якість прибирання великою мірою залежить від техніки, яку
        використовують. У нашому арсеналі високоякісна техніка фірми “Karcher”.
      </h4>
      <motion.div
        className="technical-sw"
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
            prevEl: swiperTechPrev.current,
            nextEl: swiperTechNext.current,
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
          className="tech-swiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperTechPrev.current;
            swiper.params.navigation.nextEl = swiperTechNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div className="card-item__item">
              <img src={vacuum1} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Пароочисник</h4>
                <p className="card-item__brand">SC 3 Upright EasyFix Premium</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={vacuum2} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Машина для чищення килимів</h4>
                <p className="card-item__brand">BRC 40/22 C</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={vacuum3} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Пилосос</h4>
                <p className="card-item__brand">NT 90/2 Me Classic Edition</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={vacuum4} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Пилосос</h4>
                <p className="card-item__brand">NT 90/2 Me Classic Edition</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={vacuum1} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Пароочисник</h4>
                <p className="card-item__brand">SC 3 Upright EasyFix Premium</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={vacuum2} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Машина для чищення килимів</h4>
                <p className="card-item__brand">BRC 40/22 C</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={vacuum3} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Пилосос</h4>
                <p className="card-item__brand">NT 90/2 Me Classic Edition</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={vacuum4} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Пилосос</h4>
                <p className="card-item__brand">NT 90/2 Me Classic Edition</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiperTechPrev" ref={swiperTechPrev}></div>
        <div className="swiperTechNext" ref={swiperTechNext}></div>
      </motion.div>
    </div>
  );
};

export default Tech;
