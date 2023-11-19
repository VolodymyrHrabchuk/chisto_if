import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ReactComponent as Pattern } from "../assets/img/pattern.svg";
import chemical1 from "../assets/img/chemicals1.png";
import chemical2 from "../assets/img/chemicals2.png";
import diploma from "../assets/img/diploma.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Chemicals = () => {
  const swiperNavPrev = useRef(null);
  const swiperNavNext = useRef(null);
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);

  return (
    <div className="container">
      <div className="breadcrumbs">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"} className="breadcrumbs-link">
              Головна
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Сертифікати</Breadcrumb.Item>
        </Breadcrumb>
        <Pattern className="pattern" />
      </div>
      <h2 className="heading">Сертифікована хімія</h2>
      <motion.div
        className="chem-swiper"
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
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          navigation={{
            prevEl: swiperNavPrev.current,
            nextEl: swiperNavNext.current,
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
            820: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="first-swiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrev.current;
            swiper.params.navigation.nextEl = swiperNavNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide className="swiperslide">
            <div className="card-item__item">
              <img src={chemical1} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Универсальний засіб</h4>
                <p className="card-item__brand">FOX</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={chemical1} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">
                  Базовий очисник для лінолеуму
                </h4>
                <p className="card-item__brand">SKAT</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={chemical2} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">
                  Ополіскувач для посудомийних машин
                </h4>
                <p className="card-item__brand">ecosolNEUTRAL</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={chemical2} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">
                  Ополіскувач для посудомийних машин
                </h4>
                <p className="card-item__brand">ecosolNEUTRAL</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <div className="card-item__item">
              <img src={chemical1} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">Универсальний засіб</h4>
                <p className="card-item__brand">FOX</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={chemical1} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">
                  Базовий очисник для лінолеуму
                </h4>
                <p className="card-item__brand">SKAT</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={chemical2} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">
                  Ополіскувач для посудомийних машин
                </h4>
                <p className="card-item__brand">ecosolNEUTRAL</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-item__item">
              <img src={chemical2} alt="" className="card-item__img" />
              <div className="card-item__descr">
                <h4 className="card-item__type">
                  Ополіскувач для посудомийних машин
                </h4>
                <p className="card-item__brand">ecosolNEUTRAL</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiperNavPrev" ref={swiperNavPrev}></div>
        <div className="swiperNavNext" ref={swiperNavNext}></div>
      </motion.div>
      <motion.div className="diploma-swiper"
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
      viewport={{ once: true }}>
        <h2 className="heading">Сертифікати</h2>
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
          className="sec-swiper"
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperPrev.current;
            swiper.params.navigation.nextEl = swiperNext.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div className="diploma">
              <div className="diploma__item">
                <img src={diploma} alt="" className="diploma__img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diploma">
              <div className="diploma__item">
                <img src={diploma} alt="" className="diploma__img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diploma">
              <div className="diploma__item">
                <img src={diploma} alt="" className="diploma__img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diploma">
              <div className="diploma__item">
                <img src={diploma} alt="" className="diploma__img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diploma">
              <div className="diploma__item">
                <img src={diploma} alt="" className="diploma__img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diploma">
              <div className="diploma__item">
                <img src={diploma} alt="" className="diploma__img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiperPrev" ref={swiperPrev}></div>
        <div className="swiperNext" ref={swiperNext}></div>
      </motion.div>
    </div>
  );
};

export default Chemicals;