import { useRef, useState } from "react";
import cert from "../assets/img/cert.webp";
import GiftPopup from "../pages/GiftPopup";
import { motion, useInView } from "framer-motion";

const Certificate = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='container'>
      <div className='certificate' ref={ref}>
        <motion.div
          className='certificate__descr'
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -100,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
        >
          <h3 className='certificate__heading'>
            Зроби близьким приємний сюрприз
          </h3>
          <h4 className='certificate__subhead'>
            {" "}
            Подарунок у вигляді сертифіката станете чудовим та незвичним
            сюрпризом для отримувача. Сертифікат включає в себе можливість
            вибрати саме ту послугу, яка на вашу думку задовольнить отримувача.
            Сертифікат може бути на будь-яку суму, починаючи з суми мінімального
            замовлення.{" "}
          </h4>
          <motion.button
            className='btn-md-bl'
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
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 100,
          }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
        >
          <img src={cert} alt='' className='certificate__img' />
        </motion.div>
      </div>
    </div>
  );
};

export default Certificate;
