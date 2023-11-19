import { motion } from "framer-motion";

const ServiceItem = ({ imgSrc, heading, description }) => {
  return (
    <motion.div className="services__item">
      <img src={imgSrc} alt="" className="services__pic" />
      <div className="services__descr">
        <p className="services__descr-heading">{heading}</p>
        <p className="services__descr-text">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
