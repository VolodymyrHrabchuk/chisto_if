import Breadcrumb from "react-bootstrap/Breadcrumb";
import { ReactComponent as PatternBlog } from "../assets/img/pattern-blog.svg";
import { ReactComponent as PatternBottom } from "../assets/img/pattern-bottom.svg";
import BlogPic from "../assets/img/blog-photo.png";
import { Link } from "react-router-dom";
import Header from "./Header";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BlogItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <div className="top-sec">
          <motion.h2
            className="heading"
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
            Домашні улюбленці: як ефективно позбавитись шерсті
          </motion.h2>
          <PatternBlog className="pattern-blog" />
          <p className="date">18/02/2022</p>
        </div>
        <div className="article">
          <img src={BlogPic} alt="" className="article__img" />
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
            <p className="article-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p className="article-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="article-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborumDuis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. nulla pariatur.
            </p>
            <p className="article-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. nulla pariatur.{" "}
            </p>
            <p className="article-text">
              Duis aute irure dolor in repre eu fugiat nulla pariatur
            </p>
            <PatternBottom className="pattern-bottom" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
