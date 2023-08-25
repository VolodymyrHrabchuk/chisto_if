import Footer from "../components/Footer";
import Header from "../components/Header";
import BlogItem from "../components/BlogItem";
import BlogFooter from "../components/BlogFooter";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ArticlePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <BlogItem />
      <BlogFooter />
      <Footer />
    </motion.div>
  );
};

export default ArticlePage;
