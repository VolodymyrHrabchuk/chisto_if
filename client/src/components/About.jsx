import { useRef } from "react";
import about from "../assets/img/about.webp";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='container'>
      <div className='about' ref={ref}>
        <motion.div
          className='about__desc'
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
          <p className='heading'>Коротко про нас</p>
          <p className='about__text'>
            Наша компанія прагне досягти виняткової якості виконаної роботи.
            Використання передової техніки та сертифікованих мийних засобів
            гарантує, що кожна робота виконується з найбільшою увагою до деталей
            і професіоналізмом.
            <br /> <br />
            Ми впевнені у важливості постійного самовдосконалення, тому навчання
            є важливою частиною нашої компанії. Наші спеціалісти постійно
            вдосконалюють свої навички та знання, щоб відповідати найсучаснішим
            стандартам і вимогам.
            <br /> <br />
            Ми покладаємо великий акцент на персонал, оскільки вони є основою
            успіху нашої компанії. З ретельністю підходимо до підбору нових
            співробітників, а також надаємо їм можливість розвиватись і зростати
            разом з нами.
          </p>
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
          <img src={about} alt='cleaning' className='about__pic' />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
