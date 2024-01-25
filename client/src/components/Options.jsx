import Breadcrumb from "react-bootstrap/Breadcrumb";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ReactComponent as Pattern } from "../assets/img/pattern.svg";
import renovation1 from "../assets/img/after-renovation-1.webp";
import renovation2 from "../assets/img/after-renovation-2.webp";
import kitchen from "../assets/img/kitchen.webp";
import livingroom from "../assets/img/livingroom.webp";
import bathroom from "../assets/img/bathroom.webp";
import bedroom from "../assets/img/bedroom.webp";
import regular1 from "../assets/img/regular-1.webp";
import regular2 from "../assets/img/regular-2.webp";
import regular3 from "../assets/img/regular-3.webp";
import commercial1 from "../assets/img/commercial-1.webp";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Options = () => {
  return (
    <>
      <div className="container">
        <div className="breadcrumbs">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={"/"} className="breadcrumbs-link">
                Головна
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Послуги</Breadcrumb.Item>
          </Breadcrumb>
          <Pattern className="pattern" />
        </div>
        <h2 className="heading">Що входить в прибирання</h2>
      </div>
      <motion.div
        className="offer-tabs"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <Tabs defaultActiveKey="general" className="tab-content" justify>
          <Tab eventKey="post-repair" title="Післяремонтне">
            <Swiper
              modules={[Pagination]}
              spaceBetween={33}
              slidesPerView={1.5}
              pagination={{
                clickable: true,
                type: "bullets",
                dynamicBullets: true,
                dynamicMainBullets: 1,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1250: {
                  slidesPerView: 1.5,
                },
              }}
              className="offer-tabs__swiper"
            >
              <SwiperSlide>
                <img src={renovation1} alt="" className="tab-image" />
                <h3 className="tab-heading">Кімната</h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={renovation2} alt="" className="tab-image" />
                <h3 className="tab-heading">Ванна кімната</h3>
              </SwiperSlide>
            </Swiper>
          </Tab>
          <Tab eventKey="general" title="Генеральне">
            <Swiper
              modules={[Pagination]}
              spaceBetween={33}
              slidesPerView={1.5}
              pagination={{
                clickable: true,
                type: "bullets",
                dynamicBullets: true,
                dynamicMainBullets: 1,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1250: {
                  slidesPerView: 1.5,
                },
              }}
              className="offer-tabs__swiper"
            >
              <SwiperSlide>
                <img src={kitchen} alt="" className="tab-image" />
                <h3 className="tab-heading">Кухня</h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={livingroom} alt="" className="tab-image" />
                <h3 className="tab-heading">Вітальня</h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={bathroom} alt="" className="tab-image" />
                <h3 className="tab-heading">Ванна кімната</h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={bedroom} alt="" className="tab-image" />
                <h3 className="tab-heading">Спальня</h3>
              </SwiperSlide>
            </Swiper>
          </Tab>
          <Tab eventKey="regular" title="Регулярне">
            <Swiper
              modules={[Pagination]}
              spaceBetween={33}
              slidesPerView={1.5}
              pagination={{
                clickable: true,
                type: "bullets",
                dynamicBullets: true,
                dynamicMainBullets: 1,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1250: {
                  slidesPerView: 1.5,
                },
              }}
              className="offer-tabs__swiper"
            >
              <SwiperSlide>
                <img src={regular1} alt="" className="tab-image" />
                <h3 className="tab-heading">Кухня</h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={regular2} alt="" className="tab-image" />
                <h3 className="tab-heading">Кімната</h3>
              </SwiperSlide>
              <SwiperSlide>
                <img src={regular3} alt="" className="tab-image" />
                <h3 className="tab-heading">Ванна кімната</h3>
              </SwiperSlide>
            </Swiper>
          </Tab>
          <Tab eventKey="commercial" title="Комерційні&nbsp;приміщення">
            <Swiper
              modules={[Pagination]}
              spaceBetween={33}
              slidesPerView={1.5}
              pagination={{
                clickable: true,
                type: "bullets",
                dynamicBullets: true,
                dynamicMainBullets: 1,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                1250: {
                  slidesPerView: 1.5,
                },
              }}
              className="offer-tabs__swiper"
            >
              <SwiperSlide>
                <img src={commercial1} alt="" className="tab-image" />
                <h3 className="tab-heading">Комерційні приміщення</h3>
              </SwiperSlide>
            </Swiper>
          </Tab>
        </Tabs>
      </motion.div>
    </>
  );
};

export default Options;
