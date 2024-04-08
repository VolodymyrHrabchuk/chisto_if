import { motion, useInView } from "framer-motion";
// import user1 from "../assets/img/avatar-1.webp";
// import user2 from "../assets/img/avatar-2.webp";
// import user3 from "../assets/img/avatar-3.webp";
// import user4 from "../assets/img/avatar-4.webp";

import review1 from "../assets/img/review-1.png";
import review2 from "../assets/img/review-2.png";
import review3 from "../assets/img/review-3.png";
import review4 from "../assets/img/review-4.png";

import { useRef } from "react";

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const reviewData = [
    {
      // text: "Хочу вам щиро подякувати за вашу працю, дуже все гарно і чистенько прибрали, я дуже задоволена і скористаюсь вашими послугами однозначно не один раз!",
      // heading: "Оксана, Крихівці",
      // flat: "1-кімнатна квартира",
      x: -100,
      delay: 0.5,
      image: review1,
    },
    {
      // text: "Хочу ще раз вам подякувати) Я зайшла і в мене щелепа відвалилась, настільки все чистесенько, аж дихати легше 🥰 Дякую, що позбавили мене цієї участі 😂 Збулась моя давня мрія! Ви найкращі!",
      // heading: "Марія, Богородчани",
      // flat: "3-кімнатна квартира",
      x: 100,
      delay: 0.6,
      image: review2,
    },
    {
      // text: "Приїхала із-за кордону і нарешті зайшла на нову квартиру, де ви прибирали післе ремонту. Дівчата, ви супер, мені дуже сподобалась ваша робота, тепер як тільки генеральне прибирання - то тільки ви! ❤️",
      // heading: "Тетяна, Івано-Франківськ",
      // flat: "2-кімнатна квартира",
      x: -100,
      delay: 0.8,
      image: review3,
    },
    {
      // text: "Сьогодні зміг оцінити всю зроблену вами роботу по вчорашньому прибиранню - все супер і на вищому рівні! Дуже вам дякую за якісне прибирання.",
      // heading: "Богдан, Івано-Франківськ",
      // flat: "2-поверховий будинок",
      x: 100,
      delay: 1,
      image: review4,
    },
  ];

  return (
    <div className='container'>
      <h2 className='heading mt'>Відгуки наших клієнтів</h2>
      <div className='reviews' ref={ref}>
        {reviewData.map((data, index) => (
          <motion.div
            key={index}
            className='reviews__item'
            initial={{
              opacity: 0,
              x: data.x,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : data.x,
            }}
            transition={{
              duration: 0.5,
              delay: data.delay,
            }}
          >
            {/* <p className='reviews__text'>{data.text}</p> */}
            <div className='reviews__details'>
              {/* <div className='reviews__human'> */}
              {/* <h4 className='reviews__heading'>{data.heading}</h4> */}
              {/* <p className='reviews__flat'>{data.flat}</p> */}
              {/* </div> */}
              <img src={data.image} alt='User' className='reviews__avatar' />
            </div>

            {/* <div className='reviews__details'>
            <div className='reviews__human'>
              <img src={review1} alt='' className='reviews__avatar' />
              <img src={review3} alt='' className='reviews__avatar' />
            </div>
            <div className='reviews__human'>
              <img src={review2} alt='' className='reviews__avatar' />
              <img src={review4} alt='' className='reviews__avatar' />
            </div>
          </div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
