import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ReactComponent as Pattern } from "../assets/img/pattern.svg";
import ChemicalsData from "./ChemicalsData";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Chemicals = () => {
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = swiperPrev.current;
      swiperRef.current.params.navigation.nextEl = swiperNext.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const { diplomas } = ChemicalsData;

  return (
    <div className='container'>
      <div className='breadcrumbs'>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"} className='breadcrumbs-link'>
              Головна
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Сертифікати</Breadcrumb.Item>
        </Breadcrumb>
        <Pattern className='pattern' />
      </div>
      <motion.div
        className='diploma-swiper'
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <h2 className='heading'>Сертифікати</h2>
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          navigation={{
            prevEl: swiperPrev.current,
            nextEl: swiperNext.current,
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
            820: {
              slidesPerView: 1,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className='sec-swiper'
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {diplomas.map((diploma) => (
            <SwiperSlide key={diploma.id}>
              <div className='diploma'>
                <div className='diploma__item'>
                  <img src={diploma.imgSrc} alt='' className='diploma__img' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiperPrev' ref={swiperPrev}></div>
        <div className='swiperNext' ref={swiperNext}></div>
      </motion.div>
    </div>
  );
};

export default Chemicals;
