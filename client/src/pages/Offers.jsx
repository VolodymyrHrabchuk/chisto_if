import Cleaners from "../components/Cleaners";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OffersPrice from "../components/OffersPrice";
import Options from "../components/Options";
import Tech from "../components/Tech";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Offers = () => {
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
      <Options />
      <Tech />
      <Cleaners />
      <OffersPrice />
      <Footer />
    </motion.div>
  );
};

export default Offers;
