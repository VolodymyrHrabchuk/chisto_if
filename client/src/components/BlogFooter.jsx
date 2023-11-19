import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import BlogFooterIm from "../assets/img/blog-footer.png";
import BlogFooterIm1 from "../assets/img/blog-footer-1.png";
import BlogFooterIm2 from "../assets/img/article-1.png";

const BlogFooter = () => {
  const swiperBlogPrev = useRef(null);
  const swiperBlogNext = useRef(null);

  return (
    <div>
      <div className="container">
        <h2 className="heading">Читати далі</h2>
      </div>
      <div className="footer-slide">
        <Swiper
          modules={[Pagination]}
          slidesPerView={2.5}
          spaceBetween={40}
          // navigation={{
          //   prevEl: swiperBlogPrev.current,
          //   nextEl: swiperBlogNext.current,
          // }}
          pagination={{ clickable: true }}
          className="foot-swiper"
          // onInit={(swiper) => {
          //   swiper.params.navigation.prevEl = swiperBlogPrev.current;
          //   swiper.params.navigation.nextEl = swiperBlogNext.current;
          //   swiper.navigation.init();
          //   swiper.navigation.update();
          // }}
        >
          <SwiperSlide>
            <div className="footer-slide__item">
              <img src={BlogFooterIm} alt="" className="footer-slide__img" />
              <div className="footer-slide__desc">
                <h4 className="footer-slide__title">Правильне миття вікон</h4>
                <p className="footer-slide__text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="footer-slide__item">
              <img src={BlogFooterIm1} alt="" className="footer-slide__img" />
              <div className="footer-slide__desc">
                <h4 className="footer-slide__title">
                  Токсичні складники найпопул...
                </h4>
                <p className="footer-slide__text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="footer-slide__item">
              <img src={BlogFooterIm2} alt="" className="footer-slide__img" />
              <div className="footer-slide__desc">
                <h4 className="footer-slide__title">Регулярне прибирання</h4>
                <p className="footer-slide__text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="footer-slide__item">
              <img src={BlogFooterIm} alt="" className="footer-slide__img" />
              <div className="footer-slide__desc">
                <h4 className="footer-slide__title">Регулярне прибирання</h4>
                <p className="footer-slide__text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="swiperBlogPrev" ref={swiperBlogPrev}></div>
        <div className="swiperBlogNext" ref={swiperBlogNext}></div> */}
      </div>
    </div>
  );
};

export default BlogFooter;
