import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";

const LazyAbout = lazy(() => import("../components/About"));
const LazyHeader = lazy(() => import("../components/Header"));
const LazyHero = lazy(() => import("../components/Hero"));
const LazyPros = lazy(() => import("../components/Pros"));
const LazyCertificate = lazy(() => import("../components/Certificate"));
const LazyService = lazy(() => import("../components/Service"));
const LazyQuestions = lazy(() => import("../components/Questions"));
const LazyReviews = lazy(() => import("../components/Reviews"));
const LazyFooter = lazy(() => import("../components/Footer"));

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="spinner-wrap">
          <div className="spinner"></div>
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LazyHeader />
        <LazyHero />
        <LazyAbout />
        <LazyService />
        <LazyPros />
        <LazyCertificate />
        <LazyQuestions />
        <LazyReviews />
        <LazyFooter />
      </motion.div>
    </Suspense>
  );
};

export default Home;
