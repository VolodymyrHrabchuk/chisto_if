import Breadcrumb from "react-bootstrap/Breadcrumb";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ReactComponent as Pattern } from "../assets/img/pattern.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import images
// import renovation1 from "../assets/img/after-renovation-1.webp";
// import renovation2 from "../assets/img/after-renovation-2.webp";
import renovation1 from "../assets/img/renovation-1.webp";
import renovation2 from "../assets/img/renovation-1-2.webp";
// import kitchen from "../assets/img/kitchen.webp";
// import livingroom from "../assets/img/livingroom.webp";
// import bathroom from "../assets/img/bathroom.webp";
// import bedroom from "../assets/img/bedroom.webp";
import general1 from "../assets/img/general-1.webp";
import general2 from "../assets/img/general-2.webp";
import general3 from "../assets/img/general-3.webp";
import general4 from "../assets/img/general-4.webp";

// import regular1 from "../assets/img/regular-1.webp";
// import regular2 from "../assets/img/regular-2.webp";
// import regular3 from "../assets/img/regular-3.webp";

import regular1 from "../assets/img/base-3.webp";
import regular2 from "../assets/img/base-2.webp";
import regular3 from "../assets/img/base-1.webp";
// import commercial1 from "../assets/img/commercial-1.webp";
import windows1 from "../assets/img/windows-1.webp";
import commerce from "../assets/img/commercial-1.webp";

const images = {
  "post-repair": [
    { src: renovation1, alt: "" },
    { src: renovation2, alt: "" },
  ],
  general: [
    { src: general1, alt: "" },
    { src: general2, alt: "" },
    { src: general3, alt: "" },
    { src: general4, alt: "" },
  ],
  regular: [
    { src: regular1, alt: "" },
    { src: regular2, alt: "" },
    { src: regular3, alt: "" },
  ],
  commercial: [{ src: commerce, alt: "" }],
  windows: [{ src: windows1, alt: "" }],
};

const SwiperComponent = ({ category }) => (
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
    className='offer-tabs__swiper'
  >
    {images[category].map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image.src} alt='' className='tab-image' />
        <h3 className='tab-heading'>{image.alt}</h3>
      </SwiperSlide>
    ))}
  </Swiper>
);

const Options = () => {
  return (
    <>
      <div className='container'>
        <div className='breadcrumbs'>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={"/"} className='breadcrumbs-link'>
                Головна
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Послуги</Breadcrumb.Item>
          </Breadcrumb>
          <Pattern className='pattern' />
        </div>
        <h2 className='heading'>Що входить в прибирання</h2>
      </div>
      <motion.div
        className='offer-tabs'
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
        <Tabs defaultActiveKey='general' className='tab-content' justify>
          <Tab eventKey='post-repair' title='Післяремонтне'>
            <SwiperComponent category='post-repair' />
          </Tab>
          <Tab eventKey='general' title='Генеральне'>
            <SwiperComponent category='general' />
          </Tab>
          <Tab eventKey='regular' title='Базове'>
            <SwiperComponent category='regular' />
          </Tab>
          <Tab eventKey='commercial' title='Комерційне'>
            <SwiperComponent category='commercial' />
          </Tab>
          <Tab eventKey='windows' title='Миття вікон'>
            <SwiperComponent category='windows' />
          </Tab>
        </Tabs>
      </motion.div>
    </>
  );
};

export default Options;
