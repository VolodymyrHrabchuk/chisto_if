import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";

const LazyHeader = lazy(() => import("../components/Header"));
const LazyFooter = lazy(() => import("../components/Footer"));
const LazyArticles = lazy(() => import("../components/Articles"));

const Blog = () => {
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
        <LazyArticles />
        <LazyFooter />
      </motion.div>
    </Suspense>
  );
};

export default Blog;
