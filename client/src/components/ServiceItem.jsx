import { motion } from "framer-motion";

const ServiceItem = ({ imgSrc, heading, description, isActive }) => {
  return (
    <motion.div
      initial={{
        opacity: isActive ? 0 : 1,
        y: isActive ? 50 : 0,
      }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 50,
      }}
      exit={{
        opacity: 0,
        y: -50,
      }}
      transition={{ duration: 1 }}
      className="services__item"
    >
      <img src={imgSrc} alt="" className="services__pic" />
      <div className="services__descr">
        <p className="services__descr-heading">{heading}</p>
        <p className="services__descr-text">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
