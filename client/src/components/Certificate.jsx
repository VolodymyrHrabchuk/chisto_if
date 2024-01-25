import { useState } from "react";
import cert from "../assets/img/cert.webp";
import GiftPopup from "../pages/GiftPopup";
import { motion } from "framer-motion";

const Certificate = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="container">
      <div className="certificate">
        <motion.div
          className="certificate__descr"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <h3 className="certificate__heading">
            Зроби близьким приємний сюрприз
          </h3>
          <h4 className="certificate__subhead">
            {" "}
            Подарунок у вигляді сертифіката станете чудовим та незвичним
            сюрпризом для отримувача. Сертифікат включає в себе можливість
            вибрати саме ту послугу, яка на вашу думку задовольнить отримувача.
            Сертифікат може бути на будь-яку суму, починаючи з суми мінімального
            замовлення.{" "}
          </h4>
          <motion.button
            className="btn-md-bl"
            onClick={() => setOpenPopup(true)}
            whileTap={{ scale: 0.9 }}
          >
            Купити сертифікат
          </motion.button>
          <GiftPopup open={openPopup} onClose={() => setOpenPopup(false)} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <img src={cert} alt="" className="certificate__img" />
        </motion.div>
      </div>
    </div>
  );
};

export default Certificate;
