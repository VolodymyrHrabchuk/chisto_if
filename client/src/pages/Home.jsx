import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pros from "../components/Pros";
import Certificate from "../components/Certificate";
import Service from "../components/Service";
import Questions from "../components/Questions";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
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
      <Hero />
      <About />
      <Service />
      <Pros />
      <Certificate />
      <Questions />
      <Reviews />
      <Footer />
    </motion.div>
  );
};

export default Home;
