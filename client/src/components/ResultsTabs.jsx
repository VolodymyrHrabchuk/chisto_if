import Breadcrumb from "react-bootstrap/Breadcrumb";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { motion } from "framer-motion";

const ResultsTabs = () => {
  return (
    <>
      <div className="container">
        <div className="breadcrumbs">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={"/"} className="breadcrumbs-link">
                Головна
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Галерея</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h2 className="heading">Результат нашої роботи</h2>
      </div>
      <motion.div
        className="results-tabs"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        <Tabs defaultActiveKey="kitchen" className="tab-content" justify>
          <Tab eventKey="kitchen" title="Кухня">
            <Pagination tab="kitchen" />
          </Tab>
          <Tab eventKey="rooms" title="Кімнати">
            <Pagination tab="rooms" />
          </Tab>
          <Tab eventKey="bathroom" title="Ванна&nbsp;кімната">
            <Pagination tab="bathroom" />
          </Tab>
          <Tab eventKey="windows" title="Вікна">
            <Pagination tab="windows" />
          </Tab>
          <Tab eventKey="commercial" title="Комерційні&nbsp;приміщення">
            <Pagination tab="commercial" />
          </Tab>
          <Tab eventKey="dry-cleaning" title="Хімчистка">
            <Pagination tab="dry-cleaning" />
          </Tab>
        </Tabs>
      </motion.div>
    </>
  );
};

export default ResultsTabs;
