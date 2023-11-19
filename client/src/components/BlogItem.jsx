import Breadcrumb from "react-bootstrap/Breadcrumb";
import { ReactComponent as PatternBlog } from "../assets/img/pattern-blog.svg";
import { ReactComponent as PatternBottom } from "../assets/img/pattern-bottom.svg";
import BlogPic from "../assets/img/blog-photo.png";
import { Link } from "react-router-dom";
import Header from "./Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import articlesData from "./ArticlesData";

const BlogItem = () => {
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const shuffledArticles = shuffleArray(articlesData);
    const randomArticlesSubset = shuffledArticles.slice(0, 3);
    setRandomArticles(randomArticlesSubset);
  }, []);

  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="breadcrumbs">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={"/"} className="breadcrumbs-link">
                Головна
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={"/blog"} className="breadcrumbs-link">
                Блог
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Стаття</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="article">
          <img src={articlesData[0].image} alt="" className="article__img" />
          <motion.div
            className="article__inner"
            initial={{
              opacity: 0,
              y: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.5,
              },
            }}
            viewport={{ once: true }}
          >
            <h2 className="heading">{articlesData[0].title}</h2>
            <p className="article-text">{articlesData[0].fullText}</p>
            <PatternBottom className="pattern-bottom" />
          </motion.div>
        </div>

        <div className="random-articles">
          <h3 className="footer-slide__title">Додаткові статті</h3>
          <div className="random-articles__list">
            {randomArticles.map((article, index) => (
              <motion.div
                key={index}
                className="random-articles__item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <img src={article.image} alt="" className="random-articles__img" />
                <h4 className="random-articles__heading">{article.title}</h4>
                <p className="random-articles__text">{article.description}</p>
                <Link to={article.link} className="random-articles__link">
                  Читати більше
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
