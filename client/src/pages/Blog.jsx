import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Articles from "../components/Articles";
import { useEffect } from "react";

const Blog = () => {
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
      <Articles />
      <Footer />
    </motion.div>
  );
};

export default Blog;
