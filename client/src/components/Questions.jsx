import Accordion from "react-bootstrap/Accordion";
import { motion } from "framer-motion";

const Questions = () => {
  return (
    <div className="container">
      <div className="questions">
        <h2 className="heading">Популярні питання</h2>
        <motion.div
          className="questions__wrapper"
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
          <Accordion>
            <div className="questions__item">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Чи виїжджаєте ви за межі міста?
                </Accordion.Header>
                <Accordion.Body>
                  Так, виїжджаємо при мінімальній сумі замовлення 7000 гривень.
                  Це може бути комплексне прибирання з миттям вікон та
                  хімчисткою. Залежно від відстані об’єкта дорога може
                  сплачуватись замовником.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="questions__item">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Чи боретесь ви з пліснявою?</Accordion.Header>
                <Accordion.Body>
                  Із пліснявою ми не боремось. Існують спеціальні служби, які
                  цим займаються.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="questions__item">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Чи робите окремо прибирання ванної/кухні?
                </Accordion.Header>
                <Accordion.Body>
                  Так, робимо. Але в такому випадку ціна розраховується не за
                  площею (м²). Вартість буде залежати від того, чи потрібно мити
                  всередині в шафах, у духовці та холодильнику. Ціна за таке
                  прибирання обговорюється окремо.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="questions__item">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Чи обов'язково знаходитись вдома під час прибирання?
                </Accordion.Header>
                <Accordion.Body>
                  Вдома знаходитись необов’язково. На об’єкт приходить 5-6
                  працівників, робота ведеться одночасно і під час прибирання у
                  кожній кімнаті працює 1 людина. Краще розпланувати день
                  заздалегідь і вирішити питання перебування у будинку, адже
                  клінінг - справа активна, під час виконання замовлення
                  відбувається великий рух по будинку. Ми не хочемо заважати
                  вашій роботі, тож подумайте чи вам буде зручно працювати чи
                  робити інші необхідні справи під час прибирання
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="questions__item">
              <Accordion.Item eventKey="4">
                <Accordion.Header>Чи працюєте ви на свята?</Accordion.Header>
                <Accordion.Body>Так, ми працюємо завжди.</Accordion.Body>
              </Accordion.Item>
            </div>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default Questions;
