import { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import hero from "../assets/img/hero.png";
import Popup from "../pages/Popup";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="hero">
        <motion.div
          className="hero__description"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <div className="hero__description-text">
            <h1 className="hero__heading">Для тих, хто цінує якість!</h1>
            <h3 className="hero__subhead">
              <p>Наш клінінг — це інвестиція у ваше здоров'я та зручність.</p>
              <p>Робіть перші кроки до чистоти вже сьогодні!</p>
            </h3>
          </div>
          <div className="hero__description-btns">
            <motion.button
              className="btn-md-bl"
              onClick={() => setOpenModal(true)}
              whileTap={{ scale: 0.9 }}
            >
              Замовити клінінг
            </motion.button>
            <Popup open={openModal} onClose={() => setOpenModal(false)} />
            <motion.button className="btn-md-wh" whileTap={{ scale: 0.9 }}>
              <Link to={"/services"} className="btn-link">
                Послуги
              </Link>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="hero__image"
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <img src={hero} alt="" className="hero__image-pic" />
        </motion.div>
      </section>
      <AnimatePresence>
        <div className="hero__info">
          <motion.div
            className="hero__info-desc"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="hero__info-heading">
              <CountUp end={2763} duration={3.65} />+
            </p>
            <p className="hero__info-text">успішно виконаних замовлень</p>
          </motion.div>
          <motion.div
            className="hero__info-desc"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="hero__info-heading">
              <CountUp end={95} duration={3.75} />%
            </p>
            <p className="hero__info-text">
              задоволених клієнтів звертається знову
            </p>
          </motion.div>
          <motion.div
            className="hero__info-desc"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="hero__info-heading">
              <CountUp end={3} duration={3.85} />+
            </p>
            <p className="hero__info-text">
              насичений років професійного досвіду
            </p>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Hero;
