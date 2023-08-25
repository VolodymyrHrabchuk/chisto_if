import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import article1 from "../assets/img/article-1.png";
import article2 from "../assets/img/article-2.png";
import article3 from "../assets/img/article-3.png";
import { ReactComponent as Pattern } from "../assets/img/pattern.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <div className="container">
      <div className="breadcrumbs">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/"} className="breadcrumbs-link">
              Головна
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Блог</Breadcrumb.Item>
        </Breadcrumb>
        <Pattern className="pattern" />
      </div>
      <h2 className="heading">Статті</h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="articles">
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.1,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article1} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">
                  Домашні улюбленці: як ефективно позбавитись шерсті
                </h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.8,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article2} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">
                  Токсичні складники найпопулярніших миючих засобів
                </h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 1,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article3} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">Правильне миття вікон</h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="articles">
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.1,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article1} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">
                  Домашні улюбленці: як ефективно позбавитись шерсті
                </h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.8,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article2} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">
                  Токсичні складники найпопулярніших миючих засобів
                </h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 1,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article3} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">Правильне миття вікон</h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="articles">
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.1,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article1} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">
                  Домашні улюбленці: як ефективно позбавитись шерсті
                </h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.8,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article2} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">
                  Токсичні складники найпопулярніших миючих засобів
                </h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              className="articles__item"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 1,
                },
              }}
              viewport={{ once: true }}
            >
              <img src={article3} alt="" className="articles__img" />
              <div className="articles__descr">
                <h3 className="articles__heading">Правильне миття вікон</h3>
                <p className="articles__text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="articles__text">18/02/2022</p>
                <button className="btn-lbl">
                  <Link to={"/blog/article1"} className="blog-btn">
                    Читати
                  </Link>
                </button>
              </div>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Articles;
