import React from "react";
import ".//assets/sass/main.scss";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Results from "./pages/Results"
import CertPage from "./pages/CertPage";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ErrorPage from "./pages/ErrorPage";
import BlogItem from "./components/BlogItem";


const App = () => {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/services", element: <Offers /> },
    { path: "/gallery", element: <Results/> },
    { path: "/certifications", element: <CertPage /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/article1", element: <BlogItem /> },
    { path: "/privacy", element: <PrivacyPolicy /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  const location = useLocation();

  return (
  //  <Routes>
  //   <Route  path="/" element={<Home />}/>
  //   <Route  path="/services" element={<Offers />}/>
  //   <Route  path="/gallery" element={<Results/>}/>
  //   <Route  path="/certifications" element={<CertPage />}/>
  //   <Route  path="/blog" element={<Blog />}/>
  //   <Route  path="/blog/article1" element={<BlogItem />}/>
  //   <Route  path="/privacy" element={<PrivacyPolicy />}/>
  //   <Route path="*" element={<ErrorPage />}/>
  //  </Routes>
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </div>

  );
}

export default App;
