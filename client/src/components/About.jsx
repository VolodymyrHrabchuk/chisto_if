import about from "../assets/img/about.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <motion.div
          className="about__desc"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <p className="heading">Коротко про нас</p>
          <p className="about__text">
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
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <img src={about} alt="" className="about__pic" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
