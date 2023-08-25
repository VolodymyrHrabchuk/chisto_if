import Footer from "../components/Footer";
import Header from "../components/Header";
import Privacy from "../components/Privacy";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Privacy />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
