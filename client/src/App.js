import React, { lazy, Suspense } from "react";
import ".//assets/sass/main.scss";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./pages/Home"));
const Offers = lazy(() => import("./pages/Offers"));
const Results = lazy(() => import("./pages/Results"));
const CertPage = lazy(() => import("./pages/CertPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogItem = lazy(() => import("./components/BlogItem"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/services", element: <Offers /> },
    { path: "/gallery", element: <Results /> },
    { path: "/certifications", element: <CertPage /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:articleId", element: <BlogItem /> },
    { path: "/privacy", element: <PrivacyPolicy /> },
    { path: "*", element: <ErrorPage /> },
  ];

  const element = useRoutes(routes);

  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        <Suspense
          fallback={
            <div className="spinner-wrap">
              <div className="spinner"></div>
            </div>
          }
        >
          {React.cloneElement(element, { key: location.pathname })}
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default App;
