import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { ReactComponent as Pattern } from "../assets/img/pattern.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import articlesData from "./ArticlesData";

const Articles = () => {
  // Group articles into sets of three
  const groupedArticles = [];
  for (let i = 0; i < articlesData.length; i += 3) {
    groupedArticles.push(articlesData.slice(i, i + 3));
  }

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
      <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
        {groupedArticles.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="articles">
              {group.map((article, articleIndex) => (
                <motion.div
                  key={articleIndex}
                  className="articles__item"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.1,
                      delay: 0.5 + articleIndex * 0.1,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <img src={article.image} alt="" className="articles__img" />
                  <div className="articles__descr">
                    <h3 className="articles__heading">{article.title}</h3>
                    <p className="articles__text">{article.description}</p>
                    <p className="articles__text">{article.date}</p>
                    <button className="btn-lbl">
                      <Link to={article.link} className="blog-btn">
                        Читати
                      </Link>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Articles;
