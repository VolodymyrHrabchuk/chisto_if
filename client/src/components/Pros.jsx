import React, { useState, useEffect } from "react";
import { ReactComponent as IconFirst } from "../assets/img/icon-1.svg";
import { ReactComponent as IconSecond } from "../assets/img/icon-2.svg";
import { ReactComponent as IconThird } from "../assets/img/icon-3.svg";
import { ReactComponent as IconFourth } from "../assets/img/icon-4.svg";
import { ReactComponent as IconFifth } from "../assets/img/icon-5.svg";
import { ReactComponent as IconSixth } from "../assets/img/icon-6.svg";
import { motion } from "framer-motion";

const Pros = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationIndex((prevIndex) => prevIndex + 1);
    }, 500); // Adjust the delay between animations (in milliseconds)

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [animationIndex]);

  const icons = [
    IconFirst,
    IconSecond,
    IconThird,
    IconFourth,
    IconFifth,
    IconSixth,
  ];

  const headingTexts = [
    "Економія часу",
    "Прибирання у важкодоступних місцях",
    "Безпечні мийні засоби",
    "Відповідальність за пошкоджені речі",
    "Дбайливе ставлення",
    "Гігієна нашого обладнання",
  ];

  const descriptionTexts = [
    "Економія часу в прибиранні, завдяки тому що ми працюємо в команді. Злагоджена команда професіоналів, де кожен відповідає за своючастину роботи. Таким чином наша компанія демонструє високий рівень виконання роботи на об'єкті.",
    "Ми звертаємо увагу на всі важко доступні місця, а завдяки нашому обладнанню з легкістю видаляємо бруд з кожного куточка приміщення.",
    "Ми використовуємо сертифіковані ммйні засоби, що дозволяє досягти високого рівня чищення, зберігаючи при цьому поверхні, здоров'я клієнтів, тварин і навколишнього середовища.",
    "Ми відповідаємо за пошкоджені нами речі, проявляючи відповідальність та готовність вирішувати будь-які незавплановані ситуації.",
    "Є надзвичайно важливою характеристикою нашої компанії. З повагою та обережністю ставимось до майна клієнта. Дбайливе ставлення до забруднення, ми усуваємо забруднення без пошкодження поверхні.",
    "Ретельна процедура гігієни обладнання, є важливим кроком для підтримання високих стандартів чистоти . Дезинфікуємо все наше обладнання після кожного використання.",
  ];

  return (
    <div className="container">
      <h2 className="heading">Чому ми</h2>
      <div className="pros">
        <div className="pros__line">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              className="pros__item"
              initial={{
                opacity: 0,
                y: animationIndex >= index ? 50 : 0,
              }}
              animate={{
                opacity: animationIndex >= index ? 1 : 0,
                y: animationIndex >= index ? 0 : 50,
              }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.6,
                delay: index * 0.2, // Adjust the delay between animations
              }}
              viewport={{ once: true }}
            >
              <Icon />
              <h3 className="pros__heading">{headingTexts[index]}</h3>
              <p className="pros__text">{descriptionTexts[index]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pros;
