import Footer from "../components/Footer";
import Header from "../components/Header";
import ResultsTabs from "../components/ResultsTabs";
import { useEffect } from "react";

import { motion } from "framer-motion";

const Results = () => {
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
      <ResultsTabs />
      <Footer />
    </motion.div>
  );
};

export default Results;
