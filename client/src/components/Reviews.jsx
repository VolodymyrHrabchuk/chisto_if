import { motion } from "framer-motion";
import user1 from "../assets/img/avatar-1.webp";
import user2 from "../assets/img/avatar-2.webp";
import user3 from "../assets/img/avatar-3.webp";
import user4 from "../assets/img/avatar-4.webp";

const Reviews = () => {
  const reviewData = [
    {
      text: "Хочу вам щиро подякувати за вашу працю, дуже все гарно і чистенько прибрали, я дуже задоволена і скористаюсь вашими послугами однозначно не один раз!",
      heading: "Оксана, Крихівці",
      flat: "1-кімнатна квартира",
      x: -100,
      delay: 0.5,
      image: user1,
    },
    {
      text: "Хочу ще раз вам подякувати) Я зайшла і в мене щелепа відвалилась, настільки все чистесенько, аж дихати легше 🥰 Дякую, що позбавили мене цієї участі 😂 Збулась моя давня мрія! Ви найкращі!",
      heading: "Марія, Богородчани",
      flat: "3-кімнатна квартира",
      x: 100,
      delay: 0.6,
      image: user2,
    },
    {
      text: "Приїхала із-за кордону і нарешті зайшла на нову квартиру, де ви прибирали післе ремонту. Дівчата, ви супер, мені дуже сподобалась ваша робота, тепер як тільки генеральне прибирання - то тільки ви! ❤️",
      heading: "Тетяна, Івано-Франківськ",
      flat: "2-кімнатна квартира",
      x: -100,
      delay: 0.8,
      image: user3,
    },
    {
      text: "Сьогодні зміг оцінити всю зроблену вами роботу по вчорашньому прибиранню - все супер і на вищому рівні! Дуже вам дякую за якісне прибирання.",
      heading: "Богдан, Івано-Франківськ",
      flat: "2-поверховий будинок",
      x: 100,
      delay: 1,
      image: user4,
    },
  ];

  return (
    <div className="container">
      <h2 className="heading mt">Відгуки наших клієнтів</h2>
      <div className="reviews">
        {reviewData.map((data, index) => (
          <motion.div
            key={index}
            className="reviews__item"
            initial={{
              opacity: 0,
              x: data.x,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: data.delay,
              },
            }}
            viewport={{ once: true }}
          >
            <p className="reviews__text">{data.text}</p>
            <div className="reviews__details">
              <div className="reviews__human">
                <h4 className="reviews__heading">{data.heading}</h4>
                <p className="reviews__flat">{data.flat}</p>
              </div>
              <img src={data.image} alt="User" className="reviews__avatar" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
