import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Phone } from "../assets/img/phone.svg";
import { ReactComponent as Instagram } from "../assets/img/insta-icon.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Close } from "../assets/img/close.svg";
import { ReactComponent as MenuIcon } from "../assets/img/menu.svg";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const logoScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <>
      {sticky && (
        <div
          style={{ height: headRef.current.offsetHeight }}
          className="header-placeholder"
        />
      )}
      <header ref={headRef} className={sticky ? "header sticky" : "header"}>
        <Logo className="logo" onClick={logoScroll} />
        <div className="header__nav">
          <AnimatePresence>
            {isOpen ? (
              <motion.ul
                className={`header__nav-list ${isOpen ? "active" : ""}`}
                variants={item}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100vh", opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <motion.li
                  className="header__nav-item"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 1,
                    },
                  }}
                >
                  <NavLink to={"/"} className="header__nav-link">
                    Головна
                  </NavLink>
                </motion.li>
                <motion.li
                  className="header__nav-item"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.8,
                    },
                  }}
                >
                  <NavLink to={"/services"} className="header__nav-link">
                    Послуги
                  </NavLink>
                </motion.li>
                <motion.li
                  className="header__nav-item"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                >
                  <NavLink to={"/blog"} className="header__nav-link">
                    Блог
                  </NavLink>
                </motion.li>
                <motion.li
                  className="header__nav-item"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  }}
                >
                  <NavLink to={"/certifications"} className="header__nav-link">
                    Сертифікати
                  </NavLink>
                </motion.li>
                <motion.li
                  className="header__nav-item"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }}
                >
                  <NavLink to={"/gallery"} className="header__nav-link">
                    Галерея
                  </NavLink>
                </motion.li>
              </motion.ul>
            ) : (
              <ul className={`header__nav-list ${isOpen ? "active" : ""}`}>
                <li className="header__nav-item">
                  <NavLink to={"/"} className="header__nav-link">
                    Головна
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink to={"/services"} className="header__nav-link">
                    Послуги
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink to={"/blog"} className="header__nav-link">
                    Блог
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink to={"/certifications"} className="header__nav-link">
                    Сертифікати
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink to={"/gallery"} className="header__nav-link">
                    Галерея
                  </NavLink>
                </li>
              </ul>
            )}
            {isOpen && (
              <motion.div
                className="close-icon-wrap"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0.6,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1.2,
                  },
                }}
              >
                <Close className="close-icon" onClick={toggleMenu} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="header__contacts">
          <a href="tel:+380677699792" className="invisible-ph">
            +38 067 769 9792
          </a>
          <a href="tel:+380677699792" className="visible-ph">
            <Phone />
          </a>
          <a
            href="https://instagram.com/karina_chisto_if"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <MenuIcon className="menu-icon" onClick={toggleMenu} />
      </header>
    </>
  );
};

export default Header;