import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ReactComponent as Pattern2 } from "../assets/img/pattern2.svg";
import { motion } from "framer-motion";

const OffersPrice = () => {
  return (
    <div className="container">
      <motion.div
        className="offers-tab"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <Tabs defaultActiveKey="cleaning" className="tab-content" justify>
          <Tab eventKey="cleaning" title="Прибирання">
            <div className="service-price">
              <span className="service-price__name">
                Генеральне
                <span className="service-price__descr">
                  {" "}
                  - від 45-65 грн/м2
                </span>
              </span>
              <span className="service-price__name">
                Регулярне
                <span className="service-price__descr"> - від 25 грн/м2</span>
              </span>
              <span className="service-price__name">
                Коменрційні приміщення
                <span className="service-price__descr"> - від 35 грн/м2</span>
              </span>
              <span className="service-price__name">
                Післяремонтне
                <span className="service-price__descr">
                  (залежить від того, чи вмонтовані меблі) - від 40 грн/м2
                </span>
              </span>
            </div>
          </Tab>
          <Tab eventKey="windows" title="Вікна">
            <div className="service-price">
              <span className="service-price__name">
                Генеральне
                <span className="service-price__descr">- від 45-65 грн/м2</span>
              </span>
              <span className="service-price__name">
                Регулярне
                <span className="service-price__descr">- від 25 грн/м2</span>
              </span>
              <span className="service-price__name">
                Коменрційні приміщення
                <span className="service-price__descr">- від 35 грн/м2</span>
              </span>
              <span className="service-price__name">
                Післяремонтне
                <span className="service-price__descr">
                  (залежить від того, чи вмонтовані меблі) - від 40 грн/м2
                </span>
              </span>
            </div>
          </Tab>
          <Tab eventKey="additional" title="Додаткові&nbsp;послуги">
            <div className="service-price">
              <span className="service-price__name">
                Генеральне
                <span className="service-price__descr">- від 45-65 грн/м2</span>
              </span>
              <span className="service-price__name">
                Регулярне
                <span className="service-price__descr">- від 25 грн/м2</span>
              </span>
              <span className="service-price__name">
                Коменрційні приміщення
                <span className="service-price__descr">- від 35 грн/м2</span>
              </span>
              <span className="service-price__name">
                Післяремонтне
                <span className="service-price__descr">
                  (залежить від того, чи вмонтовані меблі) - від 40 грн/м2
                </span>
              </span>
            </div>
          </Tab>
          <Tab eventKey="dry-cleaning" title="Хімчистка">
            <div className="service-price">
              <span className="service-price__name">
                Генеральне
                <span className="service-price__descr">- від 45-65 грн/м2</span>
              </span>
              <span className="service-price__name">
                Регулярне
                <span className="service-price__descr">- від 25 грн/м2</span>
              </span>
              <span className="service-price__name">
                Коменрційні приміщення
                <span className="service-price__descr">- від 35 грн/м2</span>
              </span>
              <span className="service-price__name">
                Післяремонтне
                <span className="service-price__descr">
                  (залежить від того, чи вмонтовані меблі) - від 40 грн/м2
                </span>
              </span>
            </div>
          </Tab>
        </Tabs>
        <Pattern2 className="pattern2" />
      </motion.div>
    </div>
  );
};

export default OffersPrice;
