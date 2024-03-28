import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ReactComponent as Pattern2 } from "../assets/img/pattern2.svg";
import { motion } from "framer-motion";

const OffersPrice = () => {
  return (
    <div className='container'>
      <motion.div
        className='offers-tab'
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
        <Tabs defaultActiveKey='cleaning' className='tab-content' justify>
          <Tab eventKey='cleaning' title='Прибирання'>
            <div className='service-price'>
              <span className='service-price__name'>
                Генеральне:
                <span className='service-price__descr'>
                  {" "}
                  від 85 грн/м<sup>2</sup>
                </span>
              </span>
              <span className='service-price__name'>
                Регулярне:
                <span className='service-price__descr'>
                  {" "}
                  від 45 грн/м<sup>2</sup>
                </span>
              </span>
              <span className='service-price__name'>
                Комерційні приміщення:
                <span className='service-price__descr'>
                  {" "}
                  від 70 грн/м<sup>2</sup>
                </span>
              </span>
              <span className='service-price__name'>
                Післяремонтне:
                <span className='service-price__descr'>
                  <ul className='service-price__list'>
                    <li>
                      без меблів від 85 грн/м<sup>2</sup>
                    </li>
                    <li>
                      частково меблі від 100 грн/м<sup>2</sup>
                    </li>
                    <li>
                      меблі вмонтовані повністю від 115 грн/м<sup>2</sup>
                    </li>
                  </ul>
                </span>
              </span>
            </div>
          </Tab>

          <Tab eventKey='windows' title='Вікна'>
            <div className='service-price'>
              <span className='service-price__name'>
                Миття вікон після ремонту:
                <span className='service-price__descr'>
                  {" "}
                  від 150 грн/м<sup>2</sup>
                </span>
              </span>
              <span className='service-price__name'>
                Сезонне миття вікон:
                <span className='service-price__descr'>
                  {" "}
                  від 130 грн/м<sup>2</sup>
                </span>
              </span>
            </div>
          </Tab>
          <Tab eventKey='additional' title='Додаткові&nbsp;послуги'>
            <div className='service-price'>
              <span className='service-price__name'>
                Глибока чистка підлоги:
                <span className='service-price__descr'>
                  {" "}
                  від 60 грн/м<sup>2</sup>
                </span>
              </span>
              <span className='service-price__name'>
                Прибирання комерційних приміщень:
                <span className='service-price__descr'>
                  {" "}
                  від 70 грн/м<sup>2</sup>
                </span>
              </span>
              <span className='service-price__name'>
                Миття духовки в середині :
                <span className='service-price__descr'> від 800 грн</span>
              </span>
              <span className='service-price__name'>
                Миття мікрохвильової печі:
                <span className='service-price__descr'> від 250 грн</span>
              </span>
              <span className='service-price__name'>
                Миття холодильника в середині:
                <span className='service-price__descr'> від 800грн</span>
              </span>
              <span className='service-price__name'>
                Миття шаф в середині :
                <span className='service-price__descr'>
                  {" "}
                  від 1000 грн (в залежності від кількості та забруднення)
                </span>
              </span>
              <span className='service-price__name'>
                Прання штор та тюлі:
                <span className='service-price__descr'>
                  (ціна по домовленості){" "}
                </span>
              </span>
              <span className='service-price__name'>
                Миття вікон сезонне:
                <span className='service-price__descr'>
                  {" "}
                  від 150 грн/м<sup>2</sup>
                </span>
              </span>
            </div>
          </Tab>
          <Tab eventKey='dry-cleaning' title='Хімчистка'>
            <div className='service-price'>
              <span className='service-price__name'>
                Хімчистка дивану:
                <span className='service-price__descr'> від 1200 грн</span>
              </span>
              <span className='service-price__name'>
                Хімчистка матрацу (односпальний):
                <span className='service-price__descr'> від 700 грн</span>
              </span>
              <span className='service-price__name'>
                Хімчистка матрацу (двоспальний):
                <span className='service-price__descr'> від 1200 грн</span>
              </span>
              <span className='service-price__name'>
                Хімчистка крісла:
                <span className='service-price__descr'> від 350 грн</span>
              </span>
            </div>
          </Tab>
        </Tabs>
        <Pattern2 className='pattern2' />
      </motion.div>
    </div>
  );
};

export default OffersPrice;
