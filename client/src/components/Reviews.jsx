import { ReactComponent as UserIcon } from "../assets/img/user-icon.svg";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div className="container">
      <h2 className="heading mt">Відгуки наших клієнтів</h2>
      <div className="reviews">
        <motion.div
          className="reviews__item"
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
          <p className="reviews__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="reviews__details">
            <div className="reviews__human">
              <h4 className="reviews__heading">Maria, Bohorodchany</h4>
              <p className="reviews__flat">1-кімнатна квартира</p>
            </div>
            <UserIcon />
          </div>
        </motion.div>
        <motion.div
          className="reviews__item"
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: .6,
            },
          }}
          viewport={{ once: true }}
        >
          <p className="reviews__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="reviews__details">
            <div className="reviews__human">
              <h4 className="reviews__heading">Maria, Bohorodchany</h4>
              <p className="reviews__flat">1-кімнатна квартира</p>
            </div>
            <UserIcon />
          </div>
        </motion.div>
        <motion.div
          className="reviews__item"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: .8,
            },
          }}
          viewport={{ once: true }}
        >
          <p className="reviews__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="reviews__details">
            <div className="reviews__human">
              <h4 className="reviews__heading">Maria, Bohorodchany</h4>
              <p className="reviews__flat">1-кімнатна квартира</p>
            </div>
            <UserIcon />
          </div>
        </motion.div>
        <motion.div
          className="reviews__item"
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
          <p className="reviews__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <div className="reviews__details">
            <div className="reviews__human">
              <h4 className="reviews__heading">Maria, Bohorodchany</h4>
              <p className="reviews__flat">1-кімнатна квартира</p>
            </div>
            <UserIcon />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
