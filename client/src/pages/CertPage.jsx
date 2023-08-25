import Chemicals from "../components/Chemicals";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

import { motion } from "framer-motion";


const CertPage = () => {
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
      <Chemicals />
      <Footer />
    </motion.div>
  )
};

export default CertPage;
