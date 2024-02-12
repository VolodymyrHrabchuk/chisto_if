import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import TechData from "./TechData";

const Tech = () => {
  const swiperTechPrev = useRef(null);
  const swiperTechNext = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = swiperTechPrev.current;
      swiperRef.current.params.navigation.nextEl = swiperTechNext.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className='container'>
      <h2 className='heading'>Техніка, якою працюємо</h2>
      <h4 className='subheading'>
        Якість прибирання великою мірою залежить від техніки, яку
        використовують. У нашому арсеналі високоякісна техніка фірми “Karcher”.
      </h4>
      <motion.div
        className='technical-sw'
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
              slidesPerView: 1,
            },
            760: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className='tech-swiper'
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {TechData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='card-item__item'>
                <img src={item.image} alt='' className='card-item__img' />
                <div className='card-item__descr'>
                  <h4 className='card-item__type'>{item.type}</h4>
                  <p className='card-item__brand'>{item.brand}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiperTechPrev' ref={swiperTechPrev}></div>
        <div className='swiperTechNext' ref={swiperTechNext}></div>
      </motion.div>
    </div>
  );
};

export default Tech;
