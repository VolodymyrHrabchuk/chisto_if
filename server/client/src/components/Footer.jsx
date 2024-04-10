import { useState } from "react";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Instagram } from "../assets/img/insta-icon.svg";
import { Link } from "react-router-dom";
import Popup from "../pages/Popup";
import { motion } from "framer-motion";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <footer className="footer reg">
        <div className="footer-wrap">
          <Logo />
          <Link to={"/privacy"} className="footer__privacy">
            Політика конфіденційності
          </Link>
        </div>
        <div className="footer__items">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link className="footer__nav-link" to={"/"}>
                Головна
              </Link>
            </li>
            <li className="footer__list-item">
              <Link className="footer__nav-link" to={"/services"}>
                Послуги
              </Link>
            </li>
            <li className="footer__list-item">
              <Link className="footer__nav-link" to={"/blog"}>
                Блог
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__items">
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link className="footer__nav-link" to={"/certifications"}>
                Сертифікати
              </Link>
            </li>
            <li className="footer__list-item">
              <Link className="footer__nav-link" to={"/gallery"}>
                Галерея
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <a className="footer__contacts-item" href="tel:+380503986244">
          +38 050 398 62 44
          </a>
          <a className="footer__contacts-item" href="mailto:karinacisto@gmail.com">
            karinacisto@gmail.com
          </a>
          <a
            href="https://instagram.com/karina_chisto_if"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <motion.button
          className="btn-sm-bl"
          onClick={() => setOpenModal(true)}
          whileTap={{
            scale: 0.9,
          }}
        >
          Замовити клінінг
        </motion.button>
        <Popup open={openModal} onClose={() => setOpenModal(false)} />
      </footer>
      <footer className="footer mobile">
        <div className="footer-mob-wrap">
          <Logo />
          <div className="footer-mob-inner">
            <a
              href="https://instagram.com/karina_chisto_if"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <div className="footer-mob-inner__items">
              <a className="footer__contacts-item" href="tel:+380503986244">
              +38 050 398 62 44
              </a>
              <a
                className="footer__contacts-item"
                href="mailto:karinacisto@gmail.com"
              >
                karinacisto@gmail.com
              </a>
            </div>
          </div>
        </div>
        <button className="btn-sm-bl" onClick={() => setOpenModal(true)}>
          Замовити клінінг
        </button>
        <Popup open={openModal} onClose={() => setOpenModal(false)} />
        <Link to={"/privacy"} className="footer__privacy">
          Політика конфіденційності
        </Link>
      </footer>
    </>
  );
};

export default Footer;
